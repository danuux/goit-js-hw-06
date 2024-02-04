const form = document.querySelector(".login-form");
form.addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {};

    for (const element of form.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }

    if (!formData.email || !formData.password) {
        alert('Please fill in all fields');
        return;
    }
    form.reset();
};