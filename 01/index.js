/**
 * gets two number and multiply those numbers
 * @param {Number} num1
 * @param {Number} num2
 * @returns Number
 */
const multiply = (num1, num2) => num1 * num2;




/**
 * gets an array of objects which is containing a key called text and then it will return all the texts as one string
 * @example
 * concatText([{text: 'This is'}, {text: 'test'}]) will return 'this is, test'
 * @param {Array} array array of objects
 * @returns String
 */
const concatText = (array) => array.map(item => item.text).join(', ');

/**
 * gets an array of object which is containing a key called number and then it will return the sum of the numbers
 * @example
 * sumOfNumbers([{number: 3, otherKeys: 'other things'}, {number: 5, otherKeys: 'other things'}]) will return 8
 * @param {Array} array array of Objects
 * @returns Number
 */
const sumOfNumbers = (array) =>
	array.reduce((previousValue, currentValue) => currentValue.number + previousValue, 0);

module.exports = {
	multiply,
	concatText,
	sumOfNumbers
};
