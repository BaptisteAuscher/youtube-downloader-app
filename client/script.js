const input = document.querySelector('#url-input');
const radio = document.querySelector('input[type=radio]');
const button = document.querySelector('#url-button');
const inputCell = document.querySelector('#input-cell');
const form = document.querySelector('form');

window.addEventListener('load', () => {
    if (input.value !== "") {
        inputCell.classList.add('has-label');
    }
});

input.addEventListener('focus', (e) => {
    e.target.parentElement.classList.add('is-focused', 'has-label');
});

input.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        e.target.parentElement.classList.remove('has-label');
    }
    e.target.parentElement.classList.remove('is-focused');
});

button.addEventListener('click', (e) => {
    let circle = document.createElement('div');
    circle.classList.add('ripple');
    button.appendChild(circle);
    circle.style.top = e.clientY - button.offsetTop + 'px';
    circle.style.left = e.clientX - button.offsetLeft + 'px';
    setTimeout(() => button.removeChild(circle), 1000);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === "") {
        return true;
    } else {
        window.location.href = `http://localhost:3000/download?URL=${input.value}&format=${form.format.value}`;
        //window.location.href = `https://youtube-downloader-server-exp.herokuapp.com/download?URL=${input.value}`;
    }
});