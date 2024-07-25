// variables
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

document.getElementById("submit").addEventListener("click", () => {
  const authentication = document.querySelector(".authentication-area");
  authentication.style.display = "none";

  const transaction = document.querySelector(".transaction-area");
  transaction.style.display = "block";
});

depositBtn.addEventListener("click", () => {
  const deposit = document.getElementById("deposit-input").value;
  const depositNumber = parseFloat(deposit);
  const depositMoney = document.getElementById("deposit-money").innerText;
  const depositMoneyNum = parseFloat(depositMoney);
  const totalNumber = (depositNumber + depositMoneyNum).toFixed(2);
  document.getElementById("deposit-money").innerText = totalNumber;
  document.getElementById("deposit-input").value = "";

  const totalMoney = document.getElementById("total-money").innerText;
  const totalMoneyNum = parseFloat(totalMoney);
  const totalAmount = (depositNumber + totalMoneyNum).toFixed(2);
  document.getElementById("total-money").innerText = totalAmount;
});

withdrawBtn.addEventListener("click", () => {
  const withdraw = document.getElementById("withdraw-input").value;
  const withdrawNumber = parseFloat(withdraw);
  const withdrawMoney = document.getElementById("withdraw-money").innerText;
  const withdrawMoneyNum = parseFloat(withdrawMoney);
  const totalWithdrawNumber = (withdrawNumber + withdrawMoneyNum).toFixed(2);
  document.getElementById("withdraw-money").innerText = totalWithdrawNumber;
  document.getElementById("withdraw-input").value = "";

  const totalMoney = document.getElementById("total-money").innerText;
  const totalMoneyNum = parseFloat(totalMoney);
  if (withdrawNumber > totalMoneyNum) {
    alert("You do not have enough cash");
    document.getElementById("withdraw-money").innerText = withdrawMoneyNum;
  } else {
    const totalAmount = (totalMoneyNum - withdrawNumber).toFixed(2);
    document.getElementById("total-money").innerText = totalAmount;
  }
});
