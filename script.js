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
    arr.sort(a,b) => a-b;
	let min1 = arr[0];
	let min2 = arr[1];
	return [min1,min2];
}


module.exports=mincost;
