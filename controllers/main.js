const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("pass-input");
const btnLogin = document.getElementById("btn-login");

const users = [
  {
    email: "Kevin@gmail.com",
    name: "Kevin Jimenez",
    password: "1234",
    balance: 150340,
  },
  {
    email: "Roman@gmail.com",
    name: "Roman Jimenez",
    password: "1234",
    balance: 500000,
  },
  {
    email: "Juana@gmail.com",
    name: "Juana Valentina",
    password: "1234",
    balance: 300000,
  },
];

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;

  let loggedUser = users.find(
    (element) => element.email === email && element.password === password
  );

  if (loggedUser) {
    // localStorage.setItem("loggedUser", loggedUser);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href = "./home.html";
  } else {
    alert("El usuario o la contraseña son incorrectos");
  }
});

