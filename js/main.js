// Imports
import { AlertError } from "./alert.js"
import { calculateIMC, notNumber, displayResultMessage } from "./utils.js"

//variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Events
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = e => {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber((weight)) || notNumber((height))

  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  } 
  
  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}











