const { multiply } = require('./index');

describe('# multiply', () => {
	//TODO: delete this later and do it in the workshop
	it('passes when giving two numbers to the function', () => {
		const result = multiply(2, 10);

		expect(result).toBe(20);
	});
});

