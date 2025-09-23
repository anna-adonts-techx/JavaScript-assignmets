import { increment, reset } from "./counter.js";

const countValue = document.getElementById('count-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');
const form = document.getElementById('name-form');
const input = document.getElementById('name-input');
const message = document.getElementById('message');

incrementBtn.addEventListener('click', () => {
    increment();
    let currentCount = parseInt(countValue.textContent, 10);
    countValue.textContent = currentCount + 1;
});

resetBtn.addEventListener('click', () => {
    reset();
    countValue.textContent = 0;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value.length >= 3) {
        message.textContent = `Welcome, ${input.value}!`;
        message.style.color = "black";
        input.value = '';
    } else {
        message.textContent = "Error: must be at least 3 characters!";
        message.style.color = "red";
    }
});