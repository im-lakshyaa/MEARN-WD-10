// let arr=[100,200,300,400,500]
//  function calculatetenPercent(num){
//     return num*0.1;
//  }

//  function calculateTax(arr,cb){
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         res.push(cb(arr[i]));
//     }
//     return res;
//  }

//  let finalOutput=calculateTax(arr,calculatetenPercent)
// console.log(finalOutput);













// let arr=[1,2,3,4,5];

// function calculateTwentyPercent(num){
//     return num*0.2;
// }

// Array.prototype.calculateTax=function(calculateFn){
//     let res=[];
//     for(let i=0;i<this.length;i++){
//         res.push(calculateFn(this[i]));
//     }
//     return res;
// }

// let finalOutput=arr.calculateTax(calculateTwentyPercent);
// console.log(finalOutput);



//closer practice

//counter

// function CreateCounter(){
//     let counter=0;
//     function increment(){
//         counter=counter+1;
//         console.log(counter);
        
//     }
//     return increment;
// }
// let Output=CreateCounter();
// console.log(Output);

// function createAdder(){
//     let no=1;
//     function 
// }


//1. Write a function greet(name, callback) that prints "Hello <name>" and then calls the callback
// function greet(name,callback){
    
//     function inner(){
//     console.log(`hello ${name}`);
//     }inner();
    
//     callback();
// }
// greet("lakshya",function(){
//     console.log("code is running");
    
// })

//done with closers and callback

// function calculate(a, b, callback) {
//   console.log("we are doing calculate");

//   // operations CLOSE OVER a & b (no need to pass them around)
//   function addition() {
//     console.log("Addition:", a + b);
//   }
//   function subtraction() {
//     console.log("Subtraction:", a - b);
//   }
//   function multiplication() {
//     console.log("Multiplication:", a * b);
//   }
//   function division() {
//     console.log("Division:", a / b);
//   }

//   // hand all ops to the user-provided callback
//   callback({ addition, subtraction, multiplication, division });
// }

// // use closures + callback (no `next`)
// calculate(4, 5, ({ addition, subtraction, multiplication, division }) => {
//   addition();
//   subtraction();
//   multiplication();
//   division();
// });

//doing by callback
// function calculate(a,b,callback){
//     console.log("doing calculation");
//     callback(a,b);
    
// }
// function addition(a,b){
//     console.log(a+b);    
// }
// function subtraction(a,b){
//     console.log(a-b);
// }
// function multiplication(a,b){
//     console.log(a*b);
// }
// function division(a,b){
//     console.log(a/b);
// }
// calculate(10,5,addition)



// function displayResult(result){
//     console.log("result is",result);
// }
// function addition(a,b,callback){
//     const sum=a+b;
//     callback(sum)
// }
// addition(3,5,displayResult)


// let arr=[1,2,3,4,5]
// function operation(num){
//     return num*2;
// }
// Array.prototype.processArray=function(callback){
//     let result=[];
//     for(let i=0;i<this.length;i++){
//         result.push(callback(this[i]))
//     }
//     return result;
// }
// let output=arr.processArray(operation)
// console.log(output);


// function delayedMessage(message,callback){
//     console.log("wait for 2 sec");
//     setTimeout(function(){
//         console.log("hello lakshya");
//         callback();
//     },2000)
// };
// function afterMessage(){
//     console.log("done");
// }
// delayedMessage("hello",afterMessage)


// function checkEvenOdd(num,callback){
//     if(num%2==0){
//         callback("Even")
//     }else{
//         callback("Odd")
//     }
// }
// function result(output){
//     console.log("number is"+output);
// }
// checkEvenOdd(4,result);

//closer
//1 question
// function greet(name){
//     return function inner(){
//         console.log(`hello ${name}`);
        
//     }
// }
// // greet("lakshya")();
// let say=greet("lakshya");
// say();

//2 question
// function makeCounter(){
//     let counter=1;
//     return function inner(){
//         counter++;
//         console.log(counter);
        
//     }
// }
// makeCounter()();

// function multiplyBy(n){
//     return function inner(num){
//         return num*n;
        
//     }
// }
// let double=multiplyBy(2);
// console.log(double(5));


// function bankAccount(initialBalance){
//     let balance=initialBalance;
//     function deposit(amount){
//         balance=balance+amount;
//         console.log(`Deposited: ${amount}, Current Balance: ${balance}`);
//     }
//     function withdraw(amount){
//         if(amount <= balance){
//             balance=balance-amount;
//              console.log(`Withdrew: ${amount}, Current Balance: ${balance}`);
//         }else{
//             console.log("Insufficient funds");
            
//         }
//     }
//     function getBalance() {
//     console.log(`Current Balance: ${balance}`);
//     return balance;
//   }
//    return { deposit, withdraw, getBalance };
// }
// let account=bankAccount(1000);
// account.deposit(500);
// account.withdraw(100);

