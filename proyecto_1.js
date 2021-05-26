/*Project 1
By: Kaiser*/ 

///////////////////////////////////////////////////////////////First Excercise////////////////////////////////////////////////////////////////////////////////

/*function standard_function(lower_limit,upper_limit,increment){
    let array = [];
    for(i = lower_limit; i <= upper_limit;i= i+increment){
        array.push(i);
    }
    return(array);
}
console.log(standard_function(0,100,1));*/

const array_const = (lower_limit,upper_limit,increment)=>{
    if(lower_limit === undefined && upper_limit === undefined && increment === undefined){
        lower_limit = 0;
        upper_limit = 100;
        increment = 1;
    }
    else if(increment === undefined){
        increment = 1;
    }
    else if(upper_limit === undefined){
        upper_limit = lower_limit;
        lower_limit = 0;
    }
    const i_array = [];
    for(let i = lower_limit;i<=upper_limit;i+=increment){
        i_array.push(i);
    }
    return(i_array);
}
/*console.log(array_const(0,100,1));
console.log(array_const(0,10));
console.log(array_const(11));*/
const array_one = array_const();
console.log(array_const());
///////////////////////////////////////////////////////////////Second Excercise////////////////////////////////////////////////////////////////////////////////

const array_even = (lower_limit,upper_limit)=>{
    const i_array = [];
    if(lower_limit === undefined && upper_limit === undefined){
        lower_limit = 100;
        upper_limit = 200;

    }
    else if(upper_limit === undefined){
        upper_limit = lower_limit;
        lower_limit = 0;
    }
    for(let i = lower_limit;i<=upper_limit;i++){
        if(i%2 == 0 ){
            i_array.push(i);
        }
    }
    return(i_array);
}
//console.log(array_even(100));
array_two = array_even();
console.log(array_even());

/////////////////////////////////////////////////////////////Third Excersice///////////////////////////////////////////////////////////////////////////////////

const array_odd = (lower_limit,upper_limit)=>{
    const i_array = [];
    if(lower_limit === undefined && upper_limit === undefined){
        lower_limit = 200;
        upper_limit = 300;
    }
    else if(upper_limit === undefined){
        upper_limit = lower_limit;
        lower_limit = 0;
    }
    for(let i = lower_limit; i<=upper_limit; i++){
        if(i%2 != 0){
            i_array.push(i);
        }
    }
    return(i_array);
}

console.log(array_odd());
array_three = array_odd();
///////////////////////////////////////////////////////////Forth Excercise///////////////////////////////////////////////////////////////////////////////////////

const prime_finder = (lower_limit, array_size) => {
    const prime_array = [];
    if(lower_limit === undefined && array_size === undefined){
        lower_limit = 0;
        array_size = 100;
    }
    else if(lower_limit === undefined){
        lower_limit =0;
    }
    else if(array_size === undefined){
        array_size = 100;
    }
    if(lower_limit == 0 || lower_limit == 1)lower_limit = 2;
    for(let i = lower_limit;prime_array.length<array_size;i++){
        if(i == 2 || i == 3 || i == 5 || i == 7 || i == 11 || i == 13 || i == 17 || i == 19 || i == 23){
            prime_array.push(i);
            //console.log(`${i}${" Es numero Primo"}`);
        }
        else if(i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0 && i%11 != 0 && i%13 != 0 && i%17 != 0 && i%19 != 0 && i%23 != 0){
            prime_array.push(i);
            //console.log(`${i}${" Es numero Primo"}`);
        }
    }
    return(prime_array);
}
array_prime = prime_finder();
console.log(prime_finder());

/////////////////////////////////////////////////////////Fifth Excercise/////////////////////////////////////////////////////////////////////////////////////////////
const num_array = [1,1];
const fib_gen = (array_size) =>{
    if(array_size === undefined){
        array_size = 50;
    }
    for(let i = 1; num_array.length<array_size;i++){
        if(num_array[i] >= Number.MAX_SAFE_INTEGER){
            num_array.push(BigInt(num_array[i-1]) +BigInt(num_array[i]));
        }
        else{
            num_array.push(num_array[i-1]+num_array[i]);
        }
        
    }
    return(num_array);
}
console.log(fib_gen());
const array_fib = fib_gen();

/////////////////////////////////////////////////////////////Sixth Excercise////////////////////////////////////////////////////////////////////////////////////////

const reducer = (accumulator,start_val)=>accumulator+start_val;
const first_sum = array_one.reduce(reducer);
console.log(first_sum);

////////////////////////////////////////////////////////////Seventh Excercise//////////////////////////////////////////////////////////////////////////////////////////

const array_two_prime = [];
for(let i = 0; i<array_prime.length;i++){
    if(array_three.includes(array_prime[i])){
        array_two_prime.push(array_prime[i]);
    }
}
console.log(array_two_prime);

/////////////////////////////////////////////////////////////Eighth Excercise///////////////////////////////////////////////////////////////////////////////////////////
const array_odd_two = [];

array_one.forEach(element =>{
    if(element % 2 != 0){
        array_odd_two.push(element);
    }
});

array_two.forEach(element =>{
    if(element % 2 != 0){
        array_odd_two.push(element);
    }
});

array_three.forEach(element =>{
    if(element % 2 != 0){
        array_odd_two.push(element);
    }
});

array_prime.forEach(element =>{
    if(element % 2 != 0){
        array_odd_two.push(element);
    }
});

array_fib.forEach(element => {
    if(element % 2 != 0){
        array_odd_two.push(element);
    }
});

console.log(array_odd_two);

/////////////////////////////////////////////////////////////Ninth Excercise//////////////////////////////////////////////////////////////////////////////







