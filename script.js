function mincost(arr)
{ 
  let mincost = 0;
	while(arr.length>1)
		{
			arr.sort(a,b) => a-b;
			let min1 = arr[0];
			let min2 = arr[1];
			let sum = min1 + min2;
			arr.splice(0,2);
			mincost += sum;
			arr.push(sum);
			arr = arr.filter((e) => e!==min1 && e!==min2)
		}
	return mincost;
}
module.exports=mincost;
