const form = document.querySelector(".login-form");

form.addEventListener("submit", hendlerSubmit);

function hendlerSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const info = {
    email: elements.email.value.trim(),
    pass: elements.password.value.trim(),
  };
  if (info.email === "" || info.pass === "") {
    alert("All form fields must be filled in");
  }

  console.log(info);
  event.target.reset();
}
