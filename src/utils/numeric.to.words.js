// single digits 0~9
const sd = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// double digits 10~19
const dd= ['ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
// multiples of 10 , 10~90
const multipleOf10= ['', '', 'twenty', 'thirty', 'fourthy', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
// get unit keyword
const unitKeywordGetter = (z) => {
    switch(z){
        case 2:
            return 'hundread';
        case 6:
            return 'million';
        case 3:
            return 'thousand';
        case 9:
            return 'trillion';
    }
}
// number units, and their digit break point
const units=[2,3,6,9];

 const closestUnitGetter = (len) => {
     // if string length is 4 split into two parts
     if(len === 4) return 0;
     if(len === 3) return 0;
     // get the first unit thats more than the len, we need the unit just below it.
    let x = units.find(value => value >= len)
    // if you cant find a unit thats bigger than len, than the unit we choose is 9 (trillion)
    if(!!!x) return 2;
    if(!!x) return units.indexOf(x) - 1;
}

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
        return `${( nrl == 0 && nrr == 0 ) ? '' : 'and'} ${rl}${( nrl != 0 && nrr != 0 ) ? '-' : ''}${rr}`;
    }
}

// add condition to print 0 if string is empty
// check if inputed number doesnt have special chars

