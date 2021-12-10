/**
 * received two number and multiplies those numbers
 * @param {Number} num1
 * @param {Number} num2
 * @returns Number
 */
const multiply = (num1, num2) => num1 * num2;

/**
 * receives an array of objects containing a key called text, returns all the text values as one comma separated string
 * @example
 * concatText([{text: 'this is'}, {text: 'test'}]) will return 'this is, test'
 * @param {Array} array of objects
 * @returns String
 */
const concatText = (array) => array.map(item => item.text).join(', ');

/**
 * receives an array of objects containing a key called number, returns the sum of all the numbers
 * @example
 * sumOfNumbers([{number: 3, otherKeys: 'other things'}, {number: 5, otherKeys: 'other things'}]) will return 8
 * @param {Array} array of Objects
 * @returns Number
 */
const sumOfNumbers = (array) =>
	array.reduce((previousValue, currentValue) => previousValue + currentValue.number, 0);

module.exports = {
	multiply,
	concatText,
	sumOfNumbers
};
