let phoneInput;
document.addEventListener('DOMContentLoaded', function () {
  phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', formatPhoneNumber);
});


 const formatPhoneNumber=()=> {
      const inputValue = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters
      const formattedValue = format(inputValue);
      phoneInput.value = formattedValue;
}

 const format=(phoneNumber)=> {
      const countryCode = phoneNumber.slice(0, 3);
      const areaCode = phoneNumber.slice(3, 6);
      const lineNumber = phoneNumber.slice(6, 10);

      let formattedNumber = '';

      if(countryCode.length > 0 && countryCode.length <= 3) {
        formattedNumber +=  countryCode;
      }
      
      if (formattedNumber.length === 3 ) {
        formattedNumber = '(' + countryCode;
      }

      if (areaCode.length > 0) {
        formattedNumber += ') ' + areaCode;
      }

      if (lineNumber.length > 0) {
        formattedNumber += '-' + lineNumber;
      }

      return formattedNumber;
}

module.exports = format;