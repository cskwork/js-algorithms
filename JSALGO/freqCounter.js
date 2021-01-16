//Used to count frequency of list 1 and list 2 then compare values of the two lists.

/*
Write a function called same, that accepts two arrays.

The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/
function same(arr1, arr2){
	if(arr1.length !== arr2.length){
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for(let val of arr1){
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; //frequency counting. 
	}

	for(let val of arr2){
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for(let key in frequencyCounter1){
		if(!(key ** 2 in frequencyCounter2)){
			return false;
		}
		if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
			return false;
		}
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	return true;
}

var a = same([1,2,3] , [1,4,5]); //false
var b = same([1,2,3] , [1,4,9]); //true
console.log(a);
console.log(b);
console.log('\n------------------------\n');
/*
Given two strings, write a function to determine if the second string is an anagram of the first.

(Anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman.)
*/
function validAnagram(first, second){
	if(first.length !== second.length){
		return false;
	}
	
	const lookup = {}; //obj as freq.counter

	//Break down the first string.
	for(let i=0; i < first.length ; i++){
		let letter = first[i];
		//if letter exists, increment, otherwise set to 1
		lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
	}

	//Break down the second string
	//then check to first string.
	for(let i=0; i < second.length; i++){
		let letter = second[i];
		//can't find letter or letter is zero then not anagram.
		if(!lookup[letter]){
			return false;
		}else{
			lookup[letter] -= 1;
		}	
	}
	return true;
}

console.log(validAnagram('anagram','nagaram'));
