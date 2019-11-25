// let name = "John";

// function sayHi() {
//    console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();


// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       console.log(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); // what will it show? "Pete" (name where created) or "John" (name where called)?



// constructor function returns a new object
function User(name) {

    // the object method is created as a nested function
    this.sayHi = function() {
      alert(name);
    };
  }
  
  let user = new User("John");
  user.sayHi(); // the method "sayHi" code has access to the outer "name"






  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // has access to the outer "count"
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2