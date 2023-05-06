// Given an array of strings, use a function to reverse all the elements in the 
// string in ascending order and the specific elements in descending order
function reverseStrings(arr, elements) {
    const string = [];
    for (let i = 0; i < arr.length; i++) {
      if (elements.includes(i)) {
        const reversedString = arr[i].split('').reverse().join('');
        string.push(reversedString);
      } else {
        string.push(arr[i]);
      }
    }
string.sort();
return string;
}
let  array = ['jeep', 'porsche', 'volkswagen', 'tesla', ];
const elements = [0, 3];
const reversed = reverseStrings(array, elements);
console.log(reversed)


// Given an array of objects, each object representing a person with a name and age 
// property, write a function that returns the sum of all people who are less than 
// 18 years.const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
 ];
 
function under_age(people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < 18) {
        sum += people[i].age;
      }
    }
    return sum;
  }
  console.log(under_age(people));

 

// Using JS functions and an array of numbers, return positive if an element within
//  the array is positive, negative if an element is negative, else zero
function arrayOfNumbers(number){
    if (number>0){
        console.log("Number is positive")
    }
    else if(number===0){
        console.log("number is zero")
    }
    else{
        console.log("The number is negative")
    }
}
let number=[-5]
console.log(arrayOfNumbers(number))

// Given an array of objects, where each object represents an employee with an id, 
// name, and salary property, write a function that returns a new array of employee
//  objects sorted by their salary in ascending order.
const employee = [
  { id:'36457834',name: 'Alice', salary:6800 },
  { id:'63788773', name: 'Eunice', salary: 22456 },
  { id:'38748232',name: 'Charlie', salary: 746514 },
  { id:'83738929',name: 'Max', salary:47637 },
];
// employee.sort((s,t,x, y) => (x.salary < y.salary<t.salary,s.salary) ? -1 : 1);
 let changeSalary = salary.map(item=>{
    if(item.name ==='Alice'||'Eunice'||'Charlie'||'Max'){
        item.salary=6273828;
    }
    return item
});
console.log({changeSalary})



 
  



