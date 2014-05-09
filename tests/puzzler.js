/*
 * Puzzler explained.
 */



describe('Puzzler', function ()
{

	it('throws TypeError', function ()
	{
		expect(function ()
		{
			[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]

		}).toThrow();
	});

	it('first subexpr is actually computed', function ()
	{
		expect(function ()
		{
			/*
			  3 ** 2 -> 9
			  9 ** 1 -> 9
			*/
			var r = [3,2,1].reduce(modifiedPow);
			expect(r).toBe(9);

		}).not.toThrow();
	});

});

function modifiedPow (memo, item, index, array)
{
	console.log('memo: %s, item: %s, index: %s', memo, item, index /*, array */);
	return Math.pow.apply(this, arguments);
}
