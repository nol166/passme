let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let special = document.getElementById("special")
let numbers = document.getElementById("numbers")
var generateBtn = document.querySelector('#generate');
let cardHeader = document.querySelector(".card-header")
let r = Math.random().toString(36).substring(7);


const checkBoxes = [uppercase, lowercase, special, numbers]

const randomChars = (arr) => {
    let range = Math.floor(Math.random() * arr.length);
    let e = arr[range];
  
    return e;
}

const pwOptions = () => {

    let options = {
        length: 16
    }

    checkBoxes.forEach(box => {
        console.log(box)
        if (box.checked === true) {
            options[box.name] = true
        } else {
            options[box.name] = false
        }
    })

    console.log(options)

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
    console.log(options)
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

    for (var i = 0; i < options.length; i++) {
        var possibleChar = randomChars(possible);
        result.push(possibleChar);
    }

    for (var i = 0; i < ensured.length; i++) {
        result[i] = ensured[i];
    }

    return result.join('');
}

const writePassword = () => {
    var password = generatePW();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);