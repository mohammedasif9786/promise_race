 function promiseFunc1(userInput){

    return new Promise((resolve , reject)=>{

        setTimeout(()=>{

              
                resolve(userInput)
            


            console.log(`woww!!! promiseFunc1 Is excuted faster than promisefunc2` )
        },3000)
    })
 }


 function promisefunc2(userInput){
  
    return new Promise((resolve,reject)=>{

setTimeout((userInput)=>{
   
        resolve(userInput)
    
    console.log(`sorry but promisefunc1 excecuted faster than promiseFunc2` )
},5000);
    })
 }

 Promise.race([promiseFunc1(12),promisefunc2(89)])
 .then((input)=>{
    console.log(input)
 })
 .catch((input)=>{
    console.log(input)
 })