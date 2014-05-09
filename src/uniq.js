


module.exports = function uniq$viaReduce (array)
{
	return array.reduce(function (memo, item)
	{
		return (~ memo.indexOf(item) ? null : memo.push(item)), memo;
	}, []);
};
