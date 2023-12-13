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
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements");
  }

  let min1 = arr[0];
  let min2 = arr[1];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num !== min1) {
      min2 = num;
      break;
    }
  }

  return [min1, min2];
}


module.exports=mincost;
