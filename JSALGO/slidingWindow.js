//Keep track of data subset with larger array/string

/*
Write function called maxSubArraySum - accepts array of integers and number n.
This function calculates max. sum of n. consecutive elements in array. 
(largest sum in array)
*/

//O(N)
function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null; //Check input validity

    for(let i=0; i< num; i++){
        maxSum += arr[i]; //Init maxSum
    }
    tempSum = maxSum;
    
    for(let i= num; i < arr.length; i++){
        console.log('tempSum = '+tempSum+'-'+arr[i - num]+'+'+arr[i]);
        tempSum = tempSum - arr[i - num] + arr[i]; //Init input window
		//Add by init num. - first array value of window = only the sum of window.   
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
    return maxSum;
} 

maxSubArraySum([2,6,9,2,1,8,5,6,3], 3); // 19
