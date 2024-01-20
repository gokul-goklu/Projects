const formSubmit = document.querySelector("#RegisterForm");
const resultOutput = document.querySelector("#resultText");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#Email");
const inputNumber = document.querySelector("#number");
const inputPassword = document.querySelector("#password");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = inputName.value.trim();
  const emailValue = inputEmail.value.trim();
  const numberValue = inputNumber.value.trim();
  const passwordValue = inputPassword.value.trim();

  const validatemail = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  };

  const validatename = (names) => {
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    return nameRegex.test(names);
  };

  const validatenumber = (numbers) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(numbers);
  };

  const validatepassword = (passwords) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(passwords);
  };
  if (
    nameValue == "" ||
    emailValue == "" ||
    numberValue == "" ||
    passwordValue == ""
  ) {
    resultOutput.textContent = "Enter details correctly";
  } else if (!validatename(nameValue)) {
    resultOutput.textContent = "Incorrect Name";
  } else if (!validatemail(emailValue)) {
    resultOutput.textContent = "Incorrect Mail";
  } else if (!validatenumber(numberValue)) {
    resultOutput.textContent = "Incorrect Phone Number";
  } else if (!validatepassword(passwordValue)) {
    resultOutput.textContent = "Weak Password";
  } else {
    resultOutput.textContent = "Submitted Succesfully";
  }
});
