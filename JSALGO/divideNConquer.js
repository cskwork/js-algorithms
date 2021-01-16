//Divide into smaller data subset

/*
Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to the function is located. 
If the value is not found, return -1
*/

//binary search
function searchB(array, val){
	let min=0; //Init left
	let max=array.length - 1; //Init right

	while(min <= max){
	    let middle = Math.floor((min + max) / 2); //INIT Middle
	    let currentElement = array[middle];

	    if(array[middle] < val){ //Check input search value to middle. 
	        min = middle + 1; //Init new min
	    }else if (array[middle] > val){
	        max = middle - 1; //Init new max
	    }else{
	    	console.log(middle);
	        return middle;
	    }
	}
	console.log(-1);
	return -1;

}

searchB([1,2,3,4,5,6], 3); //2
searchB([1,2,3,4,5,6], 8); //-1