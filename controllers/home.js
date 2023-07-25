const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const btnGetMoney = document.getElementById("btn-get-money")
const btnWithDraw = document.getElementById("btn-withdraw")
const inputMonto = document.getElementById('monto');
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


if (!loggedUser) {
    alert("debes iniciar sesion");
    window.location.href = "./index.html";
}
let balance = loggedUser.balance

infoDiv.innerHTML = `
<div>
<span>${loggedUser.name} </span>
<span>TU SALDO ES DE $ ${balance} </span>
<div>`;


btnLogout.addEventListener("click", function () {
    localStorage.removeItem("loggedUser");
    window.location.href = "./index.html";
});

btnGetMoney.addEventListener('click', function () {
    let inputMontoInt = parseInt(inputMonto.value);
    let nuevoSaldo = loggedUser.balance - inputMontoInt;
    if (inputMontoInt <= balance) {
        balance = nuevoSaldo;
        loggedUser.balance = nuevoSaldo;
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        infoDiv.innerHTML = `
        <div>
          <span>${loggedUser.name} </span>
          <span>TU SALDO ES DE $ ${nuevoSaldo} </span>
        <div>`;
    } else {
        alert("No puedes retirar más de lo que tienes en la cuenta")
    }

});

btnWithDraw.addEventListener('click', function () {
    let inputMontoInt = parseInt(inputMonto.value);
    let nuevoSaldo = loggedUser.balance + inputMontoInt;
    balance = nuevoSaldo;
    loggedUser.balance = nuevoSaldo;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    infoDiv.innerHTML = `
        <div>
        <span>${loggedUser.name} </span>
        <span>TU SALDO ES DE $ ${nuevoSaldo} </span>
        <div>`;
});


