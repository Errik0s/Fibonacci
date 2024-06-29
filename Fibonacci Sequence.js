//create a function that takes as parameter an n integer and it returns n digits from the fibonacci sequence as an array.

function fibonacciGenerator (n){

var output=[];

    if (n == 1){
        output = [0];
    
    }

    else if (n == 2){
        output = [0,1];

    }
         
    else{
        output = [0,1];
        for(var counter = 2; counter < n; counter++){
            output.push(output[output.length-2]+output[output.length-1]);
        }


    }
    console.log(output);

}

//calling the function,    

fibonacciGenerator(3)