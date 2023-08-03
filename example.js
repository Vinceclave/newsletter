/*  counting the length of a word
    const countWords = (words) => {
        let lengthOfWord = 0

        for (let i = 0; i < words.length; i++) {
            lengthOfWord++
        }
        
        return lengthOfWord > 0 ? lengthOfWord : 'You should input a word' 
    }


    console.log(countWords('asdasd'))
*/

/*  sum of array 
    
    const sumArr = ([...arr]) => {
        return arr.reduce((prev, next) => prev + next)
    }

    console.log(sumArr([1, 2, 3, 4, 5, 6]))

*/

/*  getting area of square and rectangle
    const areaOfSquare = (sideLength) => {
        return sideLength  * sideLength
    }

    console.log(areaOfSquare(3))


    const areaOfRectangle = (length, width) => {
        const area = length * width 

        return isNaN(area) || null ? 'input two numbers' : area
    }

    console.log(areaOfRectangle(3, 2))
*/

/*  checking if it's odd or even
    const oddEven = ([...nums]) => {
        let odd = []
        let even = []

        nums.map((num) => {
            return num % 2 == 0 ? even.push(num) : odd.push(num)
        })
        return { odd, even  }
    }

    console.log(oddEven([1, 2, 3, 4, 5, 6, 7]))
*/

const reversedString = str => {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    
    return reversed
}

console.log(reversedString('hello'))