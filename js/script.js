const passwordInput = document.querySelector("#password");
const generatePassword = document.querySelector(".btn");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@#$%^&*()_+~|<>?-=!";
const allChars = upperCase + lowercase + number + symbol;

const copyPass = document.querySelector("#copyPass");

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordInput.value = password;
}

generatePassword.addEventListener("click", createPassword);

function tooltip() {
  
  const tooltip = document.querySelector(".tooltip");
  tooltip.classList.add("visible");
  setTimeout(() => {
    tooltip.classList.remove("visible");
  }, 2000);
}

function copy() {
  if (passwordInput.value !== "") {
    passwordInput.select();
    document.execCommand("copy");
    tooltip();
  }
}
copyPass.addEventListener("click", copy);
