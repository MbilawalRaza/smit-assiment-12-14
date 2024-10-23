//task 1
// let studentNames = [];
//task 2
// let studentNames = new Array();
//task 3
// let studentNames = ["Alice", "Bob", "Charlie"];
//task 4
// let numbers = [1, 2, 3, 4, 5];\
//task 5
// let booleanValues = [true, false, true, false];
//task 6
//let mixedArray = [42, "Hello", true, null, { name: "Alice" }, [1, 2, 3]];
//task 7
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


//task 8
// var studentNames = ["michel","jh0n","tony"];
// var studentscoe = [64,46,96]

// const studentarr =[
// {studentName:'aliRaza',studentScore:200 },
// {studentName:'bilawal',studentScore:340 },
// {studentName:'Ahemad',studentScore:390 },

// ]
// const box = document.getElementById('box')


// studentarr.forEach((item,index)=>{
// box.innerHTML=`
// <p>Score of ${item.studentName} is ${item.studentScore} percentage is : ${item.studentScore/500*100}%</p>

// `
// })




// const studentarr = [
//     { studentName: 'aliRaza', studentScore: 200 },
//     { studentName: 'bilawal', studentScore: 340 },
//     { studentName: 'Ahemad', studentScore: 390 },
// ];

// const box = document.getElementById('box');

// studentarr.forEach((item) => {
//     box.innerHTML += `
//         <p>Score of ${item.studentName} is ${item.studentScore}, percentage is: ${(item.studentScore / 500 * 100).toFixed(2)}%</p>
//     `;
// });
//task 9

// var fruit = ["apple","mango","banana"]
//a

// var arr = ["apple","mango","banana" ]
// var  userinpt = prompt("what you want to add" )
// arr.unshift(userinpt)
// document.write(arr)

//b
// var arr = ["apple","mango","banana" ]
// var  userinpt = prompt("what you want to add" )
// arr.push(userinpt)
// document.write(arr)

//c
// var arr = ["apple","mango","banana" ]
// var  userinpt = prompt("what you want to add" )
//// var  userinpt2 = prompt("what you want to add" )
// arr.unshift(userinpt)
// arr.unshift(userinpt2)
// document.write(arr)
//d
// var arr = ["apple","mango","banana" ]
// var  userinpt = prompt("what you want to add" )
//// var  userinpt2 = prompt("what you want to add" )
// arr.shift(userinpt)
//e
// var arr = ["apple","mango","banana" ]
// var  userinpt = prompt("what you want to add" )
//// var  userinpt2 = prompt("what you want to add" )
// arr.pop(userinpt)
//f
// var index = parseInt(prompt('At which index do you want to add a color?'));
// var colorToAdd = prompt('What color do you want to add at that index?');
// var arr = ["yellow","wite","black"]
// if (index  ){
//     console.log(arr.splice(index,0,colorToAdd),arr)
// }
// else{console.log("not work")}

// var index = parseInt(prompt('At which index do you want to deletea color?'));
// var colorTodel = prompt('how many color do you want to delete');
// var arr = ["yellow","wite","black"]
// if (index  ){
//     console.log(arr.splice(index, colorTodel, ),arr)
// }
// else{console.log("not work")}
//task 10
// let studentScores = [82, 92, 78, 80, 28, 36];
// studentScores.sort((a, b) => a - b);
// console.log("Sorted student scores:", studentScores);
//task 11
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
// var selectedcities = cities.splice(0,3)
// console.log('selectedcity',selectedcities)
//task12
// var arr = ['This ', 'is ', 'my ', 'cat'];
// var resultarr= arr.join('')
// console.log('result',resultarr)
//task 13


// var fifoQueue = [];


// fifoQueue.push("First");
// fifoQueue.push("Second");
// fifoQueue.push("Third");

// console.log("Current Queue:", fifoQueue);


// var removedValue1 = fifoQueue.shift();
// console.log("Removed:", removedValue1);
// console.log("Current Queue after removing:", fifoQueue);

// var removedValue2 = fifoQueue.shift();
// console.log("Removed:", removedValue2);
// console.log("Current Queue after removing:", fifoQueue);

// var removedValue3 = fifoQueue.shift();
// console.log("Removed:", removedValue3);
// console.log("Current Queue after removing:", fifoQueue);

// var removedValue4 = fifoQueue.shift();
// console.log("Removed:", removedValue4);



// var lifoStack = [];


// lifoStack.push("First");
// lifoStack.push("Second");
// lifoStack.push("Third");

// console.log("Current Stack:", lifoStack);

// stack (pop)
// var removedValue1 = lifoStack.pop(); 
// console.log("Removed:", removedValue1);
// console.log("Current Stack after removing:", lifoStack);

// var removedValue2 = lifoStack.pop(); 
// console.log("Removed:", removedValue2);
// console.log("Current Stack after removing:", lifoStack);

// var removedValue3 = lifoStack.pop(); 
// console.log("Removed:", removedValue3);
// console.log("Current Stack after removing:", lifoStack);

// var removedValue4 = lifoStack.pop(); 
// console.log("Removed:", removedValue4); 
//task15
// const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select name="manufacturers" id="manufacturers">');
// for (let i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');


