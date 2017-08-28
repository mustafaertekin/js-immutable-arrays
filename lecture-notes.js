
function sum(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

/********************************************/
function printout(a, b, fn){
    console.log("RESULT: ", fn(a,b));
}
//var result = printout(2, 3, multiply);

/********************************************/
function lessComplexPrintout(a, b, fn1, fn2){
    console.log(fn1(a, b), fn2(a,b));
}
function anotherLessComplexPrintout(a, b, fn1, fn2, fn3){
    console.log(fn1(a, b), fn2(a,b), fn3(a,b));
}

//lessComplexPrintout(4, 5, multiply, sum);

/********************************************/
function complexPrintout(a, b, funcList){
    for(var i=0; i<funcList.length; i++){
        var result = funcList[i](a,b);//multiply(a,b);
        console.log(result);
    }
}

var arr = [];
arr.push(multiply);
arr.push(sum);
//complexPrintout(3, 4, arr);

/********************************************/
function uppercase(name){
    return name.toUpperCase();
}

function lowercase(name){
    return name.toLowerCase();
}

function transform(text, func){
    return func(text);
}

//console.log(transform("mesut", uppercase));
//console.log(transform("MESUT", lowercase));

/********************************************/
var mustafaHoca = {
    name: "mustafa",
    age: 35,
    resitmi: function(){
        return this.age > 18;
    },
    getFullName: function(){
        return this.name.concat(":").concat(this.age);
    }
}

//console.log(mustafaHoca.resitmi());
//console.log(mustafaHoca.getFullName());

/********************************************/

var text = "arkadaslar artik anlayin lütfen!";

/********************************************/

var arr = ["mustafa", "ali", "ferdi", "mesut", "cihad", "mehmet", "latif"];

console.log(arr.indexOf("cihad"))
console.log(arr.includes("a"))

var result = 
    arr.filter(function(name){
        return name.indexOf("a")>-1;
    });
console.log(result);

var result = 
    arr.map(function(name){
        return name.toUpperCase();
    });
console.log(result);


/* icersinde "i" gecen isimlerin, bas harflerini büyük yap **/

var result = 
    arr
    .filter(function(name){
        return name.includes("i");
    })
    .map(function(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    })

console.log(result);

/** Yukaridakinin kisa yazilmis formu: arrow functions **/

var result = 
    arr
    .filter((name) => name.includes("i"))
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))

console.log(result);

/** 2.) Yukaridakinin kisa yazilmis formu: arrow functions **/

function findByI(name){
    return name.includes("i");
}
function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

var result = arr.filter(findByI).map(capitalize);

/********************************************/
arr.forEach(function(elm, index){
    console.log(elm);
});

/*
for(var index = 0; i < arr.length; i=i+1){
    console.log(arr[i]);
}
*/

/********************************************/

var result = 
    arr.reduce(function(acc, name){
        return acc + name.length;
    }, 100);

//console.log(result);

var result = 
    arr.reduce(function(acc, name){
        return acc + (name.includes("i") && name.includes("a") ? 1 : 0);
    }, 0);
console.log(result);


var result = 
    arr.filter(function(name){
        return name.includes("i") && name.includes("a");
    }).length;
console.log(result);


/********************************************/

function adder(x){
    return function add(y){
        return x + y;
    }
}

var adder5 = adder(5);
console.log(adder5(3))

console.log(adder(5)(3))




