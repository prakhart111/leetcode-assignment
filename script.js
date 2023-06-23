let phoneInput;
let caretPosition = 0; // Variable to store the caret position

document.addEventListener('DOMContentLoaded', function () {
  phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', formatPhoneNumber);
  // phoneInput.addEventListener('keydown', saveCaretPosition);
});

const formatPhoneNumber = (event) => {
  saveCaretPosition(event);
  console.log(event);
  const inputValue = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters
  const formattedValue = format(inputValue);
  phoneInput.value = formattedValue;
  caretPosition = Math.max(0, caretPosition);
  setCaretPosition(phoneInput, caretPosition);
}

const format = (phoneNumber) => {
  const countryCode = phoneNumber.slice(0, 3);
  const areaCode = phoneNumber.slice(3, 6);
  const lineNumber = phoneNumber.slice(6, 10);

  let formattedNumber = '';

  if (countryCode.length > 0 && countryCode.length <= 3) {
    formattedNumber += countryCode;
  }

  if (formattedNumber.length === 3) {
    formattedNumber = '(' + countryCode;
    caretPosition += 1;
  }

  if (areaCode.length > 0) {
    formattedNumber += ') ' + areaCode;
    caretPosition += 1;
  }

  if (lineNumber.length > 0) {
    formattedNumber += '-' + lineNumber;
    caretPosition += 1;
  }

  return formattedNumber;
}

function saveCaretPosition(event) {
  // Save the caret position before any changes
  caretPosition = event.target.selectionStart;
  console.log(event.target.selectionStart);
}

function setCaretPosition(element, position) {
  // Set the caret position in the input field
  if(event.inputType === 'deleteContentBackward') {
    if(position >= 1 && position <= 3) {
      position -= 1;
    } else if (position >= 4 && position <= 6) {
      position -= 2;
    } else if (position >= 7 && position <= 10) {
      position -= 3;
    }
  }

  element.setSelectionRange(position, position);
}

module.exports = format;
