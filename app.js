let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let special = document.getElementById("special")
let numbers = document.getElementById("numbers")
var generateBtn = document.querySelector('#generate');
let cardHeader = document.querySelector(".card-header")


const checkBoxes = [uppercase, lowercase, special, numbers]

// make string of RANDOM chars given an array of chars
const randomChars = (arr) => {
    let range = Math.floor(Math.random() * arr.length);
    let e = arr[range];
  
    return e;
}

const pwOptions = () => {

    let options = {
        length: 16
    }
    // look at checkboxes to determine which options should be included
    checkBoxes.forEach(box => {
        // console.log(box)
        if (box.checked === true) {
            options[box.name] = true
        } else {
            options[box.name] = false
        }
    })

    // console.log(options)

    if (
    options.special === false &&
    options.numbers === false &&
    options.lowercase === false &&
    options.uppercase === false
  ) {
    alert("please select at least one option")
    return
  }

  return options
}

const generatePW = () => {
    let options = pwOptions()
    let result = []
    let possible = []
    let ensured = []

    // based on what options were selected generate random characters using those character sets
    // push possible into ensured array
    try {
        if (options.special) {
            possible = possible.concat(specialCharacters);
            ensured.push(randomChars(specialCharacters));
        }
        if (options.numbers) {
            possible = possible.concat(numericCharacters);
            ensured.push(randomChars(numericCharacters));
        }
        if (options.lowercase) {
            possible = possible.concat(lowerCasedCharacters);
            ensured.push(randomChars(lowerCasedCharacters));
        }
        if (options.uppercase) {
            possible = possible.concat(upperCasedCharacters);
            ensured.push(randomChars(upperCasedCharacters));
        }
        // loop through all possible characters and pick one, push it to the result
        for (var i = 0; i < options.length; i++) {
            var possibleChar = randomChars(possible);
            result.push(possibleChar);
        }
    
        for (var i = 0; i < ensured.length; i++) {
            result[i] = ensured[i];
        }
    
        // concat
        return result.join('');
    } catch (err) {
        console.warn(err)
    }
}

const writePassword = () => {
    var password = generatePW();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);