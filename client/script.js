const input = document.querySelector('#url-input');
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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value === "") {
        return true;
    } else {
        window.location.href = `https://youtube-downloader-server-exp.herokuapp.com/download?URL=${input.value}`;
    }
});