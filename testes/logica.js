function MeuEscopo() {
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');
    const pessoas = [];
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert('foi enviado');

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');
        console.log(nome.value, sobrenome.value, altura.value, peso.value);
    
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        altura: altura.value,
        peso: peso.value
    });
    console.log(pessoas);
    resultados.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`}
}

MeuEscopo();