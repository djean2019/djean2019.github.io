/*
* filename: app.js
*/
"use strict";
// 1- Max value between two numbers
function max(a, b){
    if (a>b) {
        return a;
    } else {
        return b;
    }
}
let a=5;
let b=15;
console.log("1- The max value between "+a+" and "+b+" is: "+max(a,b));

// 2- Max of Three
function maxOfThree(a, b, c){
    if (a>b & a>c) {
        return a;
    } else if(b>a & b>c){
        return b;
    } else if(c>a & c>b){
        return c;
    } else{
        return "No unique max value";
    }
}
a=5;
b=15;
let c=20;
console.log("2- Max of three: "+a+" - "+b+" - "+c+" is: "+maxOfThree(a,b,c));

//3- isVowel
function isVowel(arg){
    if(arg==='a'||arg==='e'||arg==='i'||arg==='o'||arg==='u'){
        return true;
    }
    else{
        return false;
    }
}
let str='i';
console.log("3- Is "+str+" vowel: "+isVowel(str));

// 4.1- Sum of array values
function sum(arr){
    let s=0;
    for(let i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}
let ar=[1,2,3,4,5];
console.log("4.1- sum of elements from "+ar+" is: "+sum(ar));

// 4.1- Product of array values
function multiply(arr){
    let prod=1;
    for(let i=0;i<arr.length;i++){
        prod=prod*arr[i];
    }
    return prod;
}
console.log("4.2- product of elements from ["+ar+"] is: "+multiply(ar));

// 5 Reverse string
function reverse(st){
    let stRev=st.substring(st.length-1);
    for(let i=0;i<st.length-1;i++){
        stRev=stRev+st.charAt(st.length-2-i);
    }
    return stRev;
}
str="jag testar"
console.log("5- The reverse of '"+str+"' is: "+reverse(str));

// 6- Find Longuest Word
function findLongestWord(word) {
    let longest=0;
    for(let i=0;i<word.length;i++){
        if(longest<word[i].length){
            longest=word[i].length;
        }
    }
    return longest;
}
let words=["Hello","Welcome","Java","Software Engineering","Web Programming"];
console.log("6- The longest word in ["+words+"] is: "+findLongestWord(words));

// 7- function filter Long Word
function filterLongWords(word, i) {
    let filterLong=[];
    let index=0;
    for(let j=0;j<word.length;j++){
        if(i<word[j].length){
            filterLong[index]=word[j];
            index++;
        }
    }
    return filterLong;
}
let len=6;
console.log("7- The filter of longest word than '"+len+"' in ["+words+"] is: ["+filterLongWords(words,len)+"]");

//8- Compute sum of squares
function computeSumOfSquares(arr){
    let sumOfSquares=ar.reduce(function(preValue, elem, i, array){
        return preValue+elem*elem;
    });
    return sumOfSquares;
}
console.log("8- The sum of square values in ["+ar+"] is:"+computeSumOfSquares(ar));

// 9- Prod odd numbers only
function printOddNumbersOnly(arr){
    let odd=[];
    let index=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2===1){
            odd[index]=arr[i];
            index++;
        }
    }
    return odd;
}
console.log("9- The odd numbers in ["+ar+"] are: " + printOddNumbersOnly(ar));

// 10- compute Sum of Squares of Evens only
function computeSumOfSquaresOfEvensOnly(arr){
    let sumSquaresEvens=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2===0){
            sumSquaresEvens+=Math.pow(arr[i],2);
        }
    }
    return sumSquaresEvens;
}
console.log("10- The sum of squares of even numbers in ["+ar+"] is: " + computeSumOfSquaresOfEvensOnly(ar));

// 11.1- sum of array element - Functional programming style
function sumFunctionalProg(arr){
    let sum=ar.reduce(function(preValue, elt, i, array){
        return preValue+elt;
    });
    return sum;
}
console.log("11- Using Functional Prog approach, The sum of values in ["+ar+"] is:"+sumFunctionalProg(ar));

// 11.2- Product of array element - Functional programming style 
function multiplyFunctionalProg(arr){
    let prod=ar.reduce(function(preValue, elt, i, array){
        return preValue*elt;
    });
    return prod;
}
console.log("11- Using Functional Prog approach, The product of values in ["+ar+"] is:"+multiplyFunctionalProg(ar));

// 12- Second Biggest number
function findSecondBiggest(arr){
    let max=arr[0];
    let secondBiggest=Number.MIN_VALUE;
    for(let i=1; i<arr.length;i++){
        if(arr[i]>=max){
            secondBiggest=max;
            max=arr[i];
        }
    }
    if(secondBiggest===Number.MIN_VALUE||secondBiggest===max){
        return "Not existed";
    }
    return secondBiggest;
}
console.log("12- The second biggest number in ["+ar+"] is: " + findSecondBiggest(ar));

// 13- Print Fibonacci
function printFibo(n,a,b){
    let fib=[a,b];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
}
console.log("13- Fibo sequence: "+printFibo(10,0,1));

// 13- Print Fibonacci - Recursion
function printFibo1(n){
    if(n==1) {
        return [0,1];
    }
    else{
        let fib=printFibo1[n-1];
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}
console.log("13- Fibo sequence/recursion: "+printFibo(10,0,1));
