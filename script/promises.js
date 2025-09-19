// const p1= Promise.reject("404");
// p1.then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


const p1= Promise.resolve("success")
const p2=Promise.reject("404 not found")
const p3=Promise.resolve("sucess-2")
//Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

//Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);  
// })


// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);  
// })

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);  
// })

// Promise.resolve([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);  
// })

