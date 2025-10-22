const contactForm = document.getElementById("contact-form");
const messageEl = document.getElementById("message");
const inputs = document.querySelectorAll("input");
const emailErrorEl = document.getElementById("email-error");
const messageErrorEl = document.getElementById("message-error");
const successMessageEl = document.querySelector(".success-message");

inputs.forEach((input) =>
  input.addEventListener("input", () => {
    const errorEl = input.nextElementSibling;
    errorEl.classList.add("hidden");
    errorEl.textContent = "";
    successMessageEl.parentElement.classList.add("hidden");
    successMessageEl.textContent = "";
  })
);

messageEl.addEventListener("input", () => {
  const errorEl = messageEl.nextElementSibling;
  errorEl.classList.add("hidden");
  errorEl.textContent = "";
});

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateEmail(email)) {
    emailErrorEl.classList.remove("hidden");
    emailErrorEl.textContent = "Email must be valid e.g. name@example.com";
    return;
  }

  if (message.length < 10) {
    messageErrorEl.classList.remove("hidden");
    messageErrorEl.textContent = "Message must be at least 10 characters";
    return;
  }

  successMessageEl.parentElement.classList.remove("hidden");
  successMessageEl.textContent = "Your message has been sent successfully!";

  form.reset();
});
