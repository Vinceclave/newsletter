const submitButton = document.querySelector('#submit').addEventListener('click', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;

    return checkingValidInput(email);
});

const checkingValidInput = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const submitButton = document.querySelector('#submit')
    const error = 'invalid email address';
    const emailInput = document.querySelector('.email-address');
    const emailInfo = emailInput.children[1];
    const thanyouElement = thankyouContainer();
    let errorElement = emailInput.querySelector('.error');
    
    if (pattern.test(email)) {
        submitButton.value = 'Submitting...';

         // Split the button value into an array of words
         const words = submitButton.value.split(' ');

         // Start the animation
         for (let i = 0; i < words.length; i++) {
             setTimeout(() => {
                 submitButton.value = words[i];
             }, i * 200);
         }

        setTimeout(() => {
            const newsletterContainer = document.querySelector('.newsletter-container');
            emailInfo.value = '';
    
            if (emailInput.contains(errorElement)) {
                emailInput.removeChild(errorElement);
            }
            
            if (newsletterContainer) {
                newsletterContainer.parentNode.replaceChildren(thanyouElement, newsletterContainer);
                newsletterContainer.parentNode.removeChild(newsletterContainer);
                emailInfo.classList.remove('error-style');
    
                // Move the dismissButton event listener here after it's created
                const dismissButton = thanyouElement.querySelector('.dismiss-message');
                dismissButton.addEventListener('click', e => {
                    submitButton.value = 'Subcribe to monthly newsletter';
                    document.body.replaceChildren(newsletterContainer, thanyouElement);
                    document.body.removeChild(thanyouElement);
                });
            }
        }, 2000)
        // If email is valid and error element exists, remove it

       
    } else {
        // If email is invalid, create or update the error element
        if (!errorElement) {
            // Create the error element if it doesn't exist
            errorElement = document.createElement('span');
            errorElement.setAttribute('class', 'error');
            emailInput.appendChild(errorElement);
        }
        // Update the error message
        errorElement.innerText = error;
        emailInfo.classList.add('error-style');
    
        // Move this line inside the else block to handle the invalid email case
    }
};




const thankyouContainer = () => {
    const thanyouElement = document.createElement('div'); // Create the element
    thanyouElement.setAttribute('class', 'thankyou-card'); // Set the class attribute
    thanyouElement.innerHTML = `
        <div class='checked'>
            <i class="fa-solid fa-check"></i>
        </div>
        <h1 class='title'>Thanks for subscribing!</h1>
        <p class='description'>A confirmation email has been sent to <b>ash@loremcompany.com</b>.
            Please open it and click the button inside to confirm your subscription.
        </p>
        <button class='dismiss-message'>dismiss message</button>
    `;

    return thanyouElement;
};
