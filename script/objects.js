// let responses ={
//     status:300,
//     data:{
//         name:"lakshya",
//         age:21,
//         isemployed:false,
//         address:{
//             street:"123 main street",
//             city:yk,
//             state:yk,
//         },
//     },
// };
//destructure

// const { version } = require("react");







//practice

// let response={
//     status:300,
//     header:{
//         type:"json",
//         version:1.1,
//     },
//     body:{
//         name:"vikas",
//         age:30,
//         isEmployed:true,
//         address:{
//             street:"123 main street",
//             city:"new york",
//             state:"ny",
//         },
//         footer:{
//             type:"json",
//             version:1.1,
//         },
//     },
// };

// let {status}=response;
// console.log(status);

// let {body:{address:{city}}}=response;
// console.log(city);

// let{body:{isEmployed}}=response;
// console.log(isEmployed);

//
// function sum(...args){
//     let sum=0;
//     for(let i=0;i<args.length;i++){
//         sum=sum+args[i];
//     }
//     return sum;
// }
// let no =sum(2,3,4,5,6,6);
// console.log(no);


//closer

// function outer(){
//     let value=10;
//     function inner(){
//         console.log(value);
//     }
//     return inner;
// }
// let res=outer();
// res();

//use callback function
function sandwich_maker(raw,callback){
    console.log("raw get");
    callback();
}
function stuffing(callback){
    console.log("stuffing is placed");
    callback();
}
function grill(callback){
    console.log("grilled");
    callback();
    
}
function wrap(callback){
    console.log("burge is wraped");
    callback();
}
function served(callback){
    console.log("served");
    callback()
}

sandwich_maker("raw", function () {
  stuffing(function () {
    setTimeout(function () {
      grill(function () {
        wrap(function () {
          served(function () {
            console.log("sandwich is ready");
          });
        });
      });
    }, 5000);
  });
});
