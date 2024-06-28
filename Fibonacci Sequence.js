var array1=[];
var n1 = 0;
var n2 = 1;
var sum = 0;


function fibonacciGenerator (n){

    for(var counter = 1; counter <= n; counter++){
        array1.push(sum);
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;

    }

console.log(array1);
    
}

    
fibonacciGenerator(5)