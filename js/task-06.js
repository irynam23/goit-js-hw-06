const textInput = document.querySelector('#validation-input');
const textLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === textLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
        return
    } textInput.classList.remove('valid')
        textInput.classList.add('invalid')
});