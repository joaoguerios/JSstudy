// const request = obj => {                        servia para XMLrequset
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () =>{
//         if (xhr.status >= 200 && xhr.status <300 ){
//             obj.success(xhr.responseText);
//         }else{
//             obj.error(xhr.statusText);     
//         }
//     })
// };



document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregapagina(el);
    }
});

// function carregapagina(el){                           servia para XMLrequset
//     const href = el.getAttribute('href');
//     request({
//         method: 'GET',
//         url : href,
//         success (response) {
//             carregaResultado(response);
//         },
//         error(errorText){
//             console.log(errorText);
//         }
//     }
//     )
// }

async function carregapagina(el){                         //fetch API
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200 ) throw new Error('ERRO criado');

        const html = await response.text();
        carregaResultado(html) 
    }catch (e){ console.warn(e)}
        
}

function carregaResultado(response){
    const resultado = document.querySelector('.result');
    resultado.innerHTML = response;
}