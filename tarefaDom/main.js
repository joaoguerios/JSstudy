const form = document.querySelector('form')
const list = document.querySelector('.list');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = form.textbox.value
    const li = document.createElement('li');
    const text = document.createTextNode(`${task}`);
    li.appendChild(text);
    list.appendChild(li)

    form.textbox.value = "";
    form.textbox.focus()
})