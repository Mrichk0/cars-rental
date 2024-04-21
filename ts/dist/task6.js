"use strict";
const onInputValidation = document.querySelector("#validation-input");
const onInputLength = Number(onInputValidation.getAttribute("data-length"));
onInputValidation.addEventListener("blur", onBlurChangeColor);
function onBlurChangeColor(e) {
    onInputValidation.classList.add("invalid");
    e.target.value.length === onInputLength
        ? onInputValidation.classList.replace("invalid", "valid")
        : onInputValidation.classList.replace("valid", "invalid");
}
//# sourceMappingURL=task6.js.map