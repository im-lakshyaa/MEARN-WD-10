function sum(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum=sum+args[i];
    }
    return sum;
}
let no =sum(2,3,4,5,6,6);
console.log(no);