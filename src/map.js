


module.exports = function map$viaReduce (array, fn)
{
	return array.reduce(function (memo, item, index, array)
	{
		return memo.concat([ fn(item, index, array) ]);
	}, []);
};
