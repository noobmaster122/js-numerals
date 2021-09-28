const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
// multiples of 10 , 10~90
const multipleOf10= ['', '', 'twenty', 'thirty', 'fourthy', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
// get unit keyword

// get string value of array, n value is the position in the array; ex: 19 => dd[19-10 = 9]
const rightSideGetter = (type, n, len, unit) => {
    // unit is unit length - 1
    return type[n.substring(len-unit, len)]
} 
const leftSideGetter = (type, n , len, unit) => {
    // unit is unit length - 1
    return type[n.substring(0, len-unit)]
}

// this only works with whole numbers
export const breakDown = (n) => {
    let len = n.length;
    if(len === 1){
        return digits[n];
    }else if(len === 2){
        // if number is of two digits but falls in the interval, return hard coded value
        if(10 <= n && n <= 19) return digits[n];
        // string value of right side of the inputed number
        let rr = rightSideGetter(digits, n, len, 1)
        // string value of left side of inputed number
        // left value should be read as multiple of 10
        let rl = leftSideGetter(multipleOf10, n, len, 1)
        // if one of the values is 0 , dont show the dash
        let nrl = n.substring(0, len-1);
        let nrr = n.substring(len-1, len);
        return `${rl}${( nrl != 0 && nrr != 0 ) ? '-' : ''}${rr}`;
    }
}


