 let arr = [
        { id: 1, name: "john", age: 18, profession: "developer" },
        { id: 2, name: "jack", age: 20, profession: "developer" },
        { id: 3, name: "karen", age: 19, profession: "admin" },
      ];
  
  // printing only develpoers
  function PrintDeveloper() {
    console.log(arr.filter((employee)=>
    employee.profession==='developer')
  )
  };
  
  
  //pushing one employee
  
  function addData() {
  
    arr.push({
      id: 4, name: 'Iti', age: 22 , profession: 'developer'
    });
    
    console.log(arr);
  }
  
  
  // remove admin
  function removeAdmin() {
  let arr1 =  arr.filter((employee)=>
    employee.profession!='admin')
  console.log(arr1);
  
  };
  
  // append another array in main array
  function concatenateArray() {
    let newArr = [
      { id: 5, name: 'Amar', age: 23, profession: 'developer' },
    { id: 6, name: 'Rashmi', age: 22, profession: 'Quality Head' }]
    ;
    
    arr=arr.concat(newArr);
    console.log(arr);
  }
  
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }