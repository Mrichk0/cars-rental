const form = document.querySelector(".login-form")!;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e: any) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (!email.value || !password.value) {
    return alert("wht");
  }
  console.log("email:", email.value, "password:", password.value);

  e.currentTarget.reset();
}

// function onFormSubmit(e: any) {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);
//   formData.forEach((value, name) => {
//     if (!value) {
//       return alert("lox");
//     }
//     console.log(name, value);
//   });
//   e.currentTarget.reset();
// }
