//Reverse a String: Write a function that reverses a given string.

function ReverseaString(str){

    let txt='';
    for (let i=str.length-1; i>=0; i--){
        txt += str[i]
    }
return txt
}
//console.log(ReverseaString("abcd"));

//Count Characters: Create a function that counts the number of characters in a string.
 function CountCharacters(str){
   
 return  str.length
}
//console.log(CountCharacters('abcd'));


//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function CapitalizeWords(str){
  
 let result= str.charAt(0).toUpperCase();
 let i=1 ;
   while(i<str.length){
    if (str[i]==' ') {
        result+=str[i]+str[i+1].toUpperCase();
        i+=2
    }
 else {
        result+=str[i]
        i++
    }
   }

return result
}
//console.log(CapitalizeWords('function that capitalizes the first letter of each word in a sentence.'));

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function FindMinMax(arr){
let min=arr[0]
let max=arr[0]
   for (let i = 0; i < arr.length; i++) {
       if (arr[i]<min) {
        min=arr[i]
       }
       if (arr[i]>max) {
        max=arr[i]
       }
   }
   return [min,max]
}
//console.log(FindMinMax([99,1,2,3,7,5,50,68]));

//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sum(arr) {
    let sum=0
for (let index = 0; index < arr.length; index++) {
    sum+=arr[index]
    
}
return sum 
}
//console.log(sum([99,1,2,3,7,5,50,68]));

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filter(arr) {
    let newarr=[]
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]<10) {
        newarr.push(arr[i])
       }
        
    }
    return newarr
}
//console.log(filter([99,1,2,3,7,5,50,68]));

//Factorial: Write a function to calculate the factorial of a given number.

function Factorial(n) {
    if (n==0) {
        return 1
    }
    let result=1
    for (let i = 1; i <=n; i++) {
      
        result *=i
    }
    return result 
}
//console.log(Factorial(5));

//Prime Number Check: Create a function to check if a number is prime or not.
function primeNumber (nbr) {
    for(let i = 2; i < nbr; i++)
     { if(nbr%i === 0) return false}
    return nbr > 1;
  }
 // console.log(primeNumber (31) );

 //Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
 function fibonacciSequence(num) {
    let seq = [];
    for (let i = 0; i < num; i++) {
            if (i === 0) {
                seq.push(0);
                }
            else if (i === 1) {
                seq.push(1);
                }
            else {
            let nextNum = seq[i - 1] + seq[i - 2];
            seq.push(nextNum);
                }
    }
    return seq;
}
//console.log(fibonacciSequence(10));