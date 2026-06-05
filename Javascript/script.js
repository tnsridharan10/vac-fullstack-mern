// // var a=10;
// // let b=20;
// // const c=30;

// // console.log(a)
// // console.log(b)
// // console.log(c)

// // var num = 10;
// // var str ="Sridharan";
// // var undefine;
// // var Null = null;
// // var boolean = true;
 
// // console.log(typeof num)
// // console.log(typeof str)
// // console.log(typeof undefine)
// // console.log(typeof Null)
// // console.log(typeof boolean)

// //  var bigInt = 123n;
// //  var symbol = Symbol('li');

// //  console.log(typeof bigInt)
// //  console.log(typeof symbol)

// //  var arr = [10,20,30,40];
// //  console.log(typeof arr, arr);
// //  var obj = {
// //     name:"sridharan",
// //     dept:["aids","ct"]
// //  }
// //  console.log(typeof obj,obj)

// var a =10;
// var b = "sri";

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a%b)
// console.log(a/b)

// var a = true;
// var b = false;

// console.log(a&&b)
// console.log(a||b)
// console.log(!a)

// a = 10;
// b = 20;

// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)
// console.log(a==b)
// console.log(a!=b)
// console.log(a===b)

// a = 10;
// b = 20;
// a += b;

// console.log(a)
// a -= b;
// console.log(a)

// var a =10;

//  console.log(a++);
//  console.log(++a);

//   var a =10;

//   console.log(a--);
//   console.log(--a);

  // a = 1;
  // b = 1;
  // c = 0;

  // var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
  //  console.log(result)

  // var a = 10;
  // var b = 20;
  // if(true){
  //   console.log(`${a} + ${b} = ${a+b}`)
  //  }

  // if(true){
  //   a = 10;
  //   console.log(a)
  // }
//var a;
// console.log(a);
// var a = 10;

// var a = 10;//global scope
// let b = 20;//block scope const or let
// if(true){
//   console.log(a)//block scope
//   let b = 30;//block scope
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// var a = 10;
// if(a%2===0){
//   console.log(`${a} is Even`);
// }
// else{
//   console.log(`${a} is Odd`);
// }

// var mark = 34;
// if(mark>=90){
//   console.log("O Grade");
// }
// else if(mark>=70){
//   console.log("A Grade");
// }
// else if(mark>=50){
//   console.log("B Grade");
// }
// else if(mark>=35){
//   console.log("Pass");
// }
// else{
//   console.log("Better Luck Next Time");
//}

// var a = 10;
// var result = a%2===0 ? "Even" : "Odd";
// console.log(result)

// mark = 34;
// var result = (mark>=90) ? "O Grade":
//              (mark>=70) ? " A Grade":
//              (mark>=35) ? "Pass":
//              "Fail";
// console.log(result);

// var day = 2;
// switch(day){
//   case 1:{
//     console.log("Sunday");
//     break;
//   }
//    case 2:{
//     console.log("Monday");
//     break;
//   }
//    case 3:{
//     console.log("Tuesday");
//     break;
//   }
//    case 4:{
//     console.log("Wednesday");
//     break;
//   }
//    case 5:{
//     console.log("Thurday");
//     break;
//   }
//    case 6:{
//     console.log("Friday");
//     break;
//   }
//    case 7:{
//     console.log("Saturday");
//   }
//   default:{
//     console.log("Invalid Input");
//   }
// }

// for(var i=1;i<=10;i++){
//   console.log(i);
// }

// var val = 1024;
// var count = 0;
// while(val > 0){
//   count++;
//   val = Math.floor(val/10);
// } 
// console.log(count);

// for(let i=1;i<=10;i++){
//   if(i%2===0){
//     continue;
//   }
//   console.log(i)
// }


// function add(a=5, b=6){
//   console.log(a+b);
// }

// add(); 

// var demo = (a = 5, b= 6) => {
//     console.log(a + b);
    
// }
//  demo(10,20);
//  demo();
//  demo(10);

//spread operator(...)
// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr2);

//destructuring operator

//var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
//console.log(m1,m2,m3,m4,m5);

// var {name,mobile,dept,email,isActive} = {
//   name:"Sridharan",
//   mobile:3216549870,
//   dept:["AI&DS"],
//   email:"hieveryone@gmail.com",
//   isActive:true
// }
// console.log(name,mobile,dept,email,isActive)

// var arr = [10,20,30,40,50];

// for(let index in arr){
//   console.log(index)
// }

// for(let value of arr){
//   console.log(value)
// }

// var obj = {
//   name:"sri",
//   dept:["ai&ds"],
//   mobile:3216549870
// }
// for(let key in obj){
//   console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val)=>(val*2));
// console.log(result)
// console.log(arr)

// var even = arr.filter((val)=>val%2===0);
// console.log(even)

// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

var userName = {
  name:"sri"
  dept:["AI&DS"],
  skills:{
    programming:["java","js","c","c++"]
    database:["sql"]
  }
}
var user ={
  ...userName,
  password:123456789
}
console.log(user);