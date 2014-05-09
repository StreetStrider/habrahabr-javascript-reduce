


var
	uniq = require('../src/uniq');

describe('uniq via reduce', function ()
{

	var testArray = [ 3, 5, 5, 4, 5, 7, 1];

	it('actually works and preserves order', function ()
	{
		expect(uniq(testArray)).toEqual([ 3, 5, 4, 7, 1 ]);
	});

	it('works well with monotonous array', function ()
	{
		expect(uniq([ 5, 5, 5 ])).toEqual([ 5 ]);
	});

	it('works well with empty array', function ()
	{
		expect(uniq([])).toEqual([]);
	});

});
