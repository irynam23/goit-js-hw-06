const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (!email.value || !password.value) {
        return alert("All fields have to be filled!!!")
    } const formData = {
        [email.name]: email.value,
[password.name]: password.value
    }
    console.log(formData);
    event.currentTarget.reset();
})
