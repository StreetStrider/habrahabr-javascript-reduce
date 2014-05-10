


describe('Math.pow with different value and power', function ()
{

	describe('power of 0', function ()
	{

		it('equals to 1 anytime', function ()
		{
			expect(Math.pow(5, 0)).toBe(1);
			expect(Math.pow(-5, 0)).toBe(1);
			expect(Math.pow(0, 0)).toBe(1);
			expect(Math.pow(1, 0)).toBe(1);
			expect(Math.pow(Infinity, 0)).toBe(1);
			expect(Math.pow(-Infinity, 0)).toBe(1);
			expect(Math.pow(NaN, 0)).toBe(1); /* wow */
		});

	});

	describe('power of 1', function ()
	{

		it('equals to same number if finite numbers', function ()
		{
			expect(Math.pow(1, 1)).toBe(1);
			expect(Math.pow(17, 1)).toBe(17);
			expect(Math.pow(-17, 1)).toBe(-17);
			expect(Math.pow(Math.PI, 1)).toBe(Math.PI);
		});

		it('equals to NaN if NaN', function ()
		{
			expect(isNaN(Math.pow(NaN, 1))).toBe(true);
		});

		it('equals to Infinity if Infinity', function ()
		{
			expect(Math.pow(Infinity, 1)).toBe(Infinity);
			expect(Math.pow(-Infinity, 1)).toBe(-Infinity);
		});

	});

	describe('power of 2 and greater', function ()
	{

		for (var power = 2; power <= 5; power++)
		{
			describe('power of '+ power, function ()
			{

				it('equals to NaN if NaN', function ()
				{
					expect(isNaN(Math.pow(NaN, power))).toBe(true);
				});

				it('equals to Infinity if Infinity', function ()
				{
					expect(Math.pow(Infinity, power)).toBe(Infinity);
					expect(Math.pow(-Infinity, power)).toBe(Infinity * Math.pow(-1, power));
				});

			});
		}

	});

	describe('power of -1', function ()
	{

		it('equals to NaN if NaN', function ()
		{
			expect(isNaN(Math.pow(NaN, -1))).toBe(true);
		});

		it('equals to 0 if Infinity', function ()
		{
			expect(Math.pow(Infinity, -1)).toBe(0);
			expect(Math.pow(-Infinity, -1)).toBe(-0);
		});

	});

	describe('power of 0.5', function ()
	{

		var frac = 0.5;

		it('handles imaginary as NaN', function ()
		{
			expect(isNaN(Math.pow(-1, frac))).toBe(true);
		});


		it('equals to NaN if NaN', function ()
		{
			expect(isNaN(Math.pow(NaN, frac))).toBe(true);
		});

		it('equals to Infinity if Infinity', function ()
		{
			expect(Math.pow(Infinity, frac)).toBe(Infinity);
			expect(Math.pow(-Infinity, frac)).toBe(Infinity); /* wow */
		});

	});

	describe('power of null', function ()
	{

		it('equals to 1 anytime (wow)', function ()
		{
			expect(Math.pow(5, null)).toBe(1);
			expect(Math.pow(-5, null)).toBe(1);
			expect(Math.pow(0, null)).toBe(1);
			expect(Math.pow(1, null)).toBe(1);
			expect(Math.pow(Infinity, null)).toBe(1);
			expect(Math.pow(-Infinity, null)).toBe(1);
			expect(Math.pow(NaN, null)).toBe(1);
		});

	});

	describe('undefined power and missing argument', function ()
	{

		it('equals to NaN anytime if power is undefined', function ()
		{
			expect(isNaN(Math.pow(0, undefined))).toBe(true);
			expect(isNaN(Math.pow(1, undefined))).toBe(true);
			expect(isNaN(Math.pow(-5, undefined))).toBe(true);
			expect(isNaN(Math.pow(17, undefined))).toBe(true);
			expect(isNaN(Math.pow(Math.PI, undefined))).toBe(true);
			expect(isNaN(Math.pow(NaN, undefined))).toBe(true);
			expect(isNaN(Math.pow(Infinity, undefined))).toBe(true);
			expect(isNaN(Math.pow(-Infinity, undefined))).toBe(true);
		});

		it('equals to NaN anytime if power is missing as well', function ()
		{
			expect(isNaN(Math.pow(0))).toBe(true);
			expect(isNaN(Math.pow(1))).toBe(true);
			expect(isNaN(Math.pow(-5))).toBe(true);
			expect(isNaN(Math.pow(17))).toBe(true);
			expect(isNaN(Math.pow(Math.PI))).toBe(true);
			expect(isNaN(Math.pow(NaN))).toBe(true);
			expect(isNaN(Math.pow(Infinity))).toBe(true);
			expect(isNaN(Math.pow(-Infinity))).toBe(true);
		});

	});

});

function isNaN (number)
{
	return number !== number;
}
