module.exports = class StringCalculator {
    constructor() {}

    calculate(numberString = '', pause = ',') {
        let sum = 0;

        this.convertString(numberString, pause).forEach((number) => {
            this.validateNumber(number);
            sum += +number;
        });

        return sum;
    }

    convertString(string, pause) {
        return string.split(pause);
    }

    validateNumber(number) {
        if(number < 0) {
            throw Error('Negative numbers not allowed!');
        }
    }
};