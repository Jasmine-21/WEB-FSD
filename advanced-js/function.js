// function board()
// {
//     console.log("Board function");
// }
// board();


// var board=function()
// {
//     console.log("Board2 function");

// }
// board();

// var board=
// {
//     "print":function()
//     {
//         console.log("board2 function");
//     }
// }
// board.print();

function dessert(x) {
    name = x;
}

var y = new dessert("cookie");
console.log(y.name);  //cookie

var dessert = {
    name: "cookie",
    change: function () {
         name = "doughnut";
    }
};

dessert.change();
console.log(dessert.name);


var person = {firstName: 'Jimi', lastName: 'Hendrix'};

function hello() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var greeting = hello.bind(person);
greeting();


var dinner = function (x) {
    this.name = x;
};

var dessert = {
    name: "doughnut"
};

dinner.call(dessert,"cookie");
console.log(dessert.name);