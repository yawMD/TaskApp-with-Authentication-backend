const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([3,2,3])
    },2000)
})

doWorkPromise.then(()=>{

})