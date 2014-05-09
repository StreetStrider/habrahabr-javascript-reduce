


var
	map = require('../src/map');

describe('map via reduce', function ()
{
	function square (x)
	{
		return x * x;
	}

	var testArray = [5, 4, 7];

	it('works like native map', function ()
	{
		expect(testArray.map(square)).toEqual(map(testArray, square));
	});

	function proj ()
	{
		return [].slice.call(arguments);
	}

	it('has identical result', function ()
	{
		var
			p1 = testArray.map(proj),
			p2 = map(testArray, proj);

		expect(p1).toEqual(p2);
	});

});
