    // const response=fetch("https://api.github.com/users/im-lakshyaa")
    // response
    // .then((res)=>{
    //     const data=res.json();
    //     return data;
    // })
    // .then((data)=>{
    //     console.log(data);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
    // .finally(()=>{
    //     console.log("prosses completed");
    // })
    async function getData () {
            try{
                const res= await fetch("https://api.github.com/users/im-lakshyaa")

                if(!res.ok){
                    throw new Error("something went wrong")
                }
                const data=await res.json();
                console.log(data);
                
            }
            catch(err){
                console.log(err);
                                l
            }
        }
        getData();