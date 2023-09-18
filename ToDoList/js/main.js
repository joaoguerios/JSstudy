const form = document.querySelector('form');
const list = document.querySelector('.tasks');
let aux = -1
let verificador = false

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = form.task.value
    const p = document.createElement('p');
    const text = document.createTextNode(`- ${task}`);
    p.appendChild(text);
    list.appendChild(p)

    form.task.value = "";
    form.task.focus()
})

form.select.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".tasks p")

    if (tasks.length === 0) {
        alert('ainda nao ha tarefas para exibir');
        return;
    }

    aux = -1 //usei let pq so vai ficar dentro desse escopo 
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("tarefa-selecionada")) {
            tasks[i].classList.remove("tarefa-selecionada");
            aux = i;
            break;
        }
    }
    if (aux === tasks.length - 1) {
        aux = -1
    }

    tasks[aux + 1].className = "tarefa-selecionada"
    const selecionada = tasks[aux + 1]
    verificador = true
    return selecionada;
})

form.delete.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".tasks p")
    if (tasks.length === 0) {
        alert('ainda nao ha tarefas para remover');
        return;
    }
    if (verificador === false) {
        alert('voce nao selecionou nenhuma tarefa para remover');
        return;
    }
    const selecionada = document.querySelector(".tarefa-selecionada")
    if (confirm(`confirma a exclusao de ${selecionada.textContent} `)) {
        list.removeChild(selecionada)
    }
})

form.record.addEventListener('click', () => {
    const tasks = document.querySelectorAll(".tasks p")
    if (tasks.length === 0) {
        alert('ainda nao ha tarefas para salvar');
        return;
    }
    let dados = "";
    tasks.forEach(tarefa => {
        dados += tarefa.innerText + ";"
    });

    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    if (localStorage.getItem("tarefaDia")) {
        alert('tarefas salvas com sucesso')
    }
})

form.getback.addEventListener('click', () => {
    const itemValue = localStorage.getItem("tarefasDia")
    const tasks = document.querySelectorAll(".tasks p")
    if (itemValue !== null) {
        const dados = localStorage.getItem("tarefasDia").split(";");
        tasks.forEach(tarefa => {       //serve para limpar as tarefas toda vez q a pessoa carrega alguma lista feita
            list.removeChild(tarefa)
        });
        dados.forEach(dado=>{
            const p = document.createElement('p');
            const text = document.createTextNode(dado);
            p.appendChild(text);
            list.appendChild(p)
        })
    }else{
        alert('nao existem tarefas para serem recuperadas');
        return;
    }
})