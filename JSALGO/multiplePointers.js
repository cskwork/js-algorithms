//Used for multiple value within list operation

/*
"Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist."
*/

//REFACTORED O(N)
function sumZero(arr){
	//Working two pointers! 
	let left = 0;
	let right = arr.length-1;
	//console.log('left: ', left, 'right: ', right);
	while(left < right){
		let sum = arr[left] + arr[right];
		if(sum === 0){
			console.log([arr[left] , arr[right]]);
			return [arr[left] , arr[right]];
	    //works because it's ordered list. 0,0 failsafe so not <=
		} else if(sum > 0){
			right--;
		} else{
			left++;
		}
	}
}

sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]
//sumZero3([1,2,3]) //undefined
sumZero([-2,0,1,3]) //undefined

console.log('\n------------------------\n');

/*
Implement a function called countUniqueValues, which
accepts a sorted array, and counts the unique values in the array.
There can be negative numbers, but it will always be sorted.
*/

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(i+1);
    return i + 1;
}

countUniqueValues([1,2,2,5,7,7,99])
