//curring

// function mailSender(to,sub,body){
//     console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
    
// }
// mailSender("abc@gmail.com" ,"hello");

//curring approuch..
// break function in two mini function
// function mailSender(to){
//     return function(sub){
//         return function(body){
//             console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
            
//         };
//     };
// };
// mailSender("abc@gamil.com")("hello")("is here");


function login(email,cb){
    console.log("login sucessfull");
    cb && cb();
     return function addtoCart(product,cb2){
        console.log(product," is added in cart");
        cb2() && cb2();
        return function checkout(cb3){
            console.log("check out is done");
            cb3()&&cb3();
            return function payment(amount,cb4){
                console.log("payment of",amount,"done");
                cb4()&&cb4();
                return function mailRe(mailId,cb5){
                    console.log("mail is sent to:",mailId);
                  cb5()&&cb5();  
                }
            }
        }
    }
}
login("abc@gmail.com",()=>console.log("[after login]"))
("shoes",()=>console.log("[after addtocart]"))
(()=>console.log("[after checkout"))
("500",()=>console.log("[after payment]"))
("abc@gmail.com",()=>console.log("[after mail]"));