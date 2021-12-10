const { multiply } = require('./index');

describe('# multiply', () => {
	it('passes when giving two numbers to the function', () => {
		const result = multiply(2, 10);

		expect(result).toBe(20);
	});
});

