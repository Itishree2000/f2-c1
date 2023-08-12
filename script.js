let arr = [
    { id: 1, name: "john", age: 18, profession: "developer" },
    { id: 2, name: "jack", age: 20, profession: "developer" },
    { id: 3, name: "karen", age: 19, profession: "admin" },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    //printing profession as developer
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].profession == "developer") {
        console.log("Profession as a Developer: " + arr[i].name);
      }
    }
  }
  
  function addData() {
    //Write your code here, just console.log
    //another emp of object
    let employee = {
      id: 4,
      name: "susan",
      age: "20",
      profession: "intern",
    };
    arr.push(employee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //removing the object where profession is admin
    arr = arr.filter((arr) => arr.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    //another array of employee
    let emp1 = [
      { id: 1, name: "Iti", age: "18", profession: "developer" },
      { id: 2, name: "Amar", age: "20", profession: "developer" },
      { id: 3, name: "Rashmi", age: "19", profession: "CEO" },
    ];
    arr = arr.concat(emp1);
    console.log(arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log("Consoling Array Variable", arr);
    // Over here I can directly access the variable.
  }