let generatedOTP;
let intervalId;

const expiresOTP = document.getElementById("otp-expires-id");

function otpExpired() {
  const interval = 1000;
  const totalEx = 15000;
  let slice = 15000 / 1000;

  intervalId = setInterval(() => {
    expiresOTP.innerText = `OTP will expire in ${slice} seconds`;
    slice -= 1;
  }, interval);

  setTimeout(() => {
    clearInterval(intervalId);
    expiresOTP.innerText = "OTP is expired";
    generateOTP();
  }, totalEx);
}

function tackleOTPGenerate() {
  const boxes = document.getElementById("otp-boxes-id");
  boxes.addEventListener("input", (e) => {
    const target = e.target;
    const value = target.value;
    if (isNaN(value)) {
      target.value = "";
      return;
    }

    const nextElement = target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }

    validateOTP();
  });
}

function generateOTP() {
  generatedOTP = Math.floor(1000 + Math.random() * 9000);
  const otpGenerateElem = document.getElementById("otp-generate-id");
  otpGenerateElem.innerText = `Generated OTP: ${generatedOTP}`;
  otpExpired();
}

function validateOTP() {
  let typedNumber = "";
  const otpBoxesElem = document.getElementById("otp-boxes-id");
  [...otpBoxesElem.children].forEach((elem) => {
    typedNumber = typedNumber + elem.value;
  });

  // logging generatedOTP and typedNumber
  console.log(generatedOTP, typedNumber);
  const result = generatedOTP === parseInt(typedNumber, 10);
  const resultElem = document.getElementById("otp-result-id");
  if (result) {
    resultElem.innerText = "OTP has been validate successfully!";
    resultElem.classList.add("success");
    resultElem.classList.remove("fail");
    clearInterval(intervalId);
  } else {
    resultElem.innerText = "OTP invalid!";
    resultElem.classList.add("fail");
    resultElem.classList.remove("success");
  }
}

function init() {
  tackleOTPGenerate();
  setTimeout(generateOTP, 2000);
}

init();
