function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return (Math.floor(Math.random() * (max - min) + min));
}

 function wait(msg,time){
     return new Promise((resolve) =>{
         setTimeout(() => {
             resolve(msg)
        }, time);
     })
 };
 
 console.log(wait('conect 4', rand()));
 console.log(wait('conect 5', rand()));
 console.log(wait('conect 6', rand()));


 // wait('conect', rand(1,3))
//     .then(resposta =>{
//         console.log(resposta);
//         return wait('conect 2', rand(1,3));
//     })
//     .then(resposta =>{
//         console.log(resposta);
//         return wait('conect 3', rand(1,3));
//     })
//     .then(resposta =>{
//         console.log(resposta);
//     });

async function wait2() {
    
    try{
        const conect1 = await wait('conect 1', rand());
        console.log(conect1);

        const conect2 = await wait('conect 2', rand());
        console.log(conect2);

        const conect3 = await wait('conect 3', rand());
        console.log(conect3);

        console.log('finish');
    }catch(e){
        console.log(e);
    }
}

wait2();