function searchwithDebounce(fn,delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

function search(name){
    console.log(`search for ${name}`);
    
}
const searchInput=searchwithDebounce(search,300);
search("lakshya")
search("lakshya kumar")



function searchwithThrottle(fn,delay){
    let lastcall=0;
    return function(...args){
        let currentcall=Date.now();
        if(currentcall-lastcall<delay){
            return;
        }
        lastcall=now;
        fun(...args);
    }
}

function