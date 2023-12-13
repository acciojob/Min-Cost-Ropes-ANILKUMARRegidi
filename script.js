function mincost(arr)
{ 
  let mincost = 0;
	while(arr.length>1)
		{
			const[min1,min2] = twoSmallest(arr);
			let sum = min1 + min2;
			mincost += sum;
			arr.push(sum);
			arr = arr.filter((e) => e!==min1 && e!==min2)
		}
	return mincost;
}
function twoSmallest(arr) {
	let min1 = Infinity;
	let min2 = Infinity;
	for(const num of arr)
		{
			if(num<min1)
			{
				min2 = min1;
				min1 = num;
			}
			else if(num<min2)
			{
				min2 = num;
			}
		}
	return [min1,min2];
}

module.exports=mincost;
