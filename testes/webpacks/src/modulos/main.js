import formgerasenha from "./formgerasenha";
formgerasenha();

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const especiais = ',./?;:[{]}!@#$%^&*()_-=+'
const geraEspecial = () => especiais[rand(0, especiais.length)];

function geraSenha(size, upcase, lowercase, number, especial) {
    const senhaArray = [];

    for (let i = 0; i < size; i++) {
        upcase && senha.push(geraMaiscula());
        lowercase && senha.push(geraMinuscula());
        number && senha.push(geraNumero());
        especial && senha.push(geraEspecial());
    }
    return senhaArray.join('').slice(0, size);
}

const senhaGerada = document.querySelector('.senha-gerada');
const size = document.querySelector('.size');
const upcase = document.querySelector('.upcase');
const lowercase = document.querySelector('.lowercase');
const number = document.querySelector('.number');
const especial = document.querySelector('.especial');
const gerarsenha = document.querySelector('.gerarsenha');

function fazer() {
    gerarsenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        size.value,
        upcase.checked,
        lowercase.checked,
        number.checked,
        especial.checked,
    );
    return senha || 'nada selecionado';
}

fazer();