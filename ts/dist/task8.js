"use strict";
const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, password }, } = e.currentTarget;
    if (!email.value || !password.value) {
        return alert("wht");
    }
    console.log("email:", email.value, "password:", password.value);
    e.currentTarget.reset();
}
//# sourceMappingURL=task8.js.map