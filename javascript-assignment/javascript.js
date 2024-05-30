
// string manipulation functions 

     // reverse a string
let arrayReverse = ['justus', 'chima', 'tochi' , 'adele']

function arrRev(str){
  console.log(str.reverse())  
}

// count the character

function count(cont){
    return cont.length
}
//  first word capital 
function captalize(firstLetter){
    console.log( firstLetter.toUpperCase() + firstLetter.slice(1))
 
}


// Array function max to min
 function FindmaxMin(arr){
  let max = arr[0];
  let min = arr[0]
    for(i = 0; i < arr.length; i++){
       if(arr[i] > max){
         max = arr[i]
       } if(arr[i] < min){
         min = arr[i]
       }
    }

    return{min: min , max: max};
 }

//  sum of all the array
function Sumofarr(arr){
  let sum = 0
  for(let i =0; i < arr.length; i++){
      sum += arr[i]
  }
  return sum;
}

// Fliter array
function FliterArray(array,condition){
    return array.filter(element => condition (element));
}

// Mathematical function

// factorial
function CalculateFacNum(number){
  if(number === 0 || number === 1){
    return 1;
  }else{
    return number * CalculateFacNum(number - 1)
  }

}

// Prime number
function isPrime(number){
  if (number <= 1){
    return false
  }
  for(let i = 2; i <=Math.sqrt(number); i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

//Fibonacci
function generateFibonacciSequence(numTerms) {
  const sequence = [0, 1];
  
  for (let i = 2; i < numTerms; i++) {
      const nextFibonacci = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextFibonacci);
  }
  
  return sequence;
}
