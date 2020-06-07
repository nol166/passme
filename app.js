let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let special = document.getElementById("special")
let numbers = document.getElementById("numbers")
var generateBtn = document.querySelector('#generate');
let cardHeader = document.querySelector(".card-header")
let r = Math.random().toString(36).substring(7);


const checkBoxes = [uppercase, lowercase, special, numbers]
let options = {
    length: 16
}

const pwOptions = () => {
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
}

const generatePW() {

}

const writePassword = () => {
    var password = pwOptions();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);