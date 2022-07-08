module.exports = function toReadable (number) {

    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let result = '';

    let digitsArray = number;

    digitsArray = digitsArray.toString().split('').map(Number);

    if (number <= 19) {
        return result = arr1[number];

    } else if (number >= 20 && number <= 99) {

        if (digitsArray[1] === 0) {
            return result = arr2[digitsArray[0]];

        } else {            
            return result = `${arr2[digitsArray[0]]} ${arr1[digitsArray[1]]}`;
        };
      
    } else if (number >= 100 && number <= 999) {

        if (digitsArray[1] === 0 && digitsArray[2] === 0) {
            return result = `${arr1[digitsArray[0]]} hundred`;

        } else if (digitsArray[1] === 0) {
            return result = `${arr1[digitsArray[0]]} hundred ${arr1[digitsArray[2]]}`;
        
        } else if (digitsArray[1] === 1) {
            return result = `${arr1[digitsArray[0]]} hundred ${arr1[(digitsArray[2] + 10)]}`;

        } else if (digitsArray[1] >= 2 && digitsArray[2] === 0) {
            return result = `${arr1[digitsArray[0]]} hundred ${arr2[digitsArray[1]]}`;

        } else {
            return result = `${arr1[digitsArray[0]]} hundred ${arr2[digitsArray[1]]} ${arr1[digitsArray[2]]}`;
        };
        
    } else {
        return result = `Your number is '${number}' and it is not supported. The supported numbers are from 0 to 999.`;
    };
}
