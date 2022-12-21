const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', (event) => {
    const value = event.currentTarget.value
    text.style.fontSize = value + 'px'
})