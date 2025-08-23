const form = document.querySelector(".login-form");

form.addEventListener("submit", hendlerSubmit);

function hendlerSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const email = elements.email.value.trim();
  const pass = elements.password.value.trim();

  if (email === "" || pass === "") {
    alert("All form fields must be filled in");
    event.target.reset();
    return;
  }

  const info = {
    email,
    pass,
  };

  console.log(info);
  event.target.reset();
}
