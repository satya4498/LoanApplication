let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
//let btnEl = document.getElementById("button");
let panEl = document.getElementById("pan");
let amtEl = document.getElementById("amount");
let nameValidation = false;
let emailValidation = false;
let panValidation = false;
let amtValidation = false;
let amtValue = 0;
let finalErrMsg = document.getElementById("finalErr");
let interestRateEl = document.getElementById("intRate");
myFormEl.addEventListener("submit", function(event) {
    if (nameValidation === true && emailValidation === true && panValidation === true && amtValidation === true) {
    //event.preventDefault();
        if (amtValue > 0) {
            let amount = amtValue;
            let rate = 8.5;
            let months = 15 * 12;
            const interest = (amount * (rate * 0.01)) / months;
            let emi = ((amount / months) + interest).toFixed(2);

            interestRateEl.textContent = emi + "/month Emi for the tenure of 15 years at 8.5% interest rate.";
        }
        myFormEl.action = "confirm.html";
        finalErrMsg.textContent = "";
    } else if (nameValidation === false) {
        event.preventDefault();
        finalErrMsg.textContent = "Name field is required*";
    } else if (emailValidation === false) {
        event.preventDefault();
        finalErrMsg.textContent = "Email field is required*";
    } else if (panValidation === false) {
        event.preventDefault();
        finalErrMsg.textContent = "PAN field is required*";
    } else if (amtValidation === false) {
        event.preventDefault();
        finalErrMsg.textContent = "Amount field is required*";
    }
    //window.location.assign("http://www.google.com/");
    //

});

nameEl.addEventListener("blur", function() {
    console.log("Blur event triggered");
    let nameErrMsg = document.getElementById("nameErr");
    let val = nameEl.value.trim();
    if (val === "") {
        nameErrMsg.textContent = "Required*";
        nameValidation = false;
    } else if (val.length < 4) {
        nameErrMsg.textContent = "Name should be at least four characters*";
        nameValidation = false;
    } else if (/^[A-Za-z\s]*$/.test(val) === false) {
        nameErrMsg.textContent = "Only alphabates and spaces are allowed*";
        nameValidation = false;
    } else if ((val.split(" ").length !== 2)) {
        nameErrMsg.textContent = "Please Enter first name and last name*";
        nameValidation = false;
    } else {
        nameErrMsg.textContent = "";
        nameValidation = true;
        sessionStorage.setItem("name",val);
    }
});

emailEl.addEventListener("blur", function() {
    let emailValue = emailEl.value.trim();
    let emailErrMsg = document.getElementById("emailErr");
    if (emailValue === "") {
        emailErrMsg.textContent = "Required*";
        emailValidation = false;
    } else if (emailValue.includes("@") === false) {
        emailErrMsg.textContent = "Please enter valid email*";
        emailValidation = false;
    } else if (emailValue.includes("@")) {
        let emailCheck = emailValue.split("@");
        let c = 0;
        for (let i of emailCheck[1]) {
            if (i === ".") {
                c++;
            }
        }
        if (c === 1) {
            emailErrMsg.textContent = "";
            emailValidation = true;
            sessionStorage.setItem("email",emailValue);
        } else {
            emailErrMsg.textContent = "Please enter valid email*";
            emailValidation = false;
        }
    }
});
panEl.addEventListener("blur", function() {
    function validatePAN() {
        var panCardEl = document.getElementById("pan");
        var panErrMsg = document.getElementById("panErr");
        var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
        if (regex.test(panCardEl.value.toUpperCase())) {
            panErrMsg.textContent = "";
            return true;
        } else {
            panErrMsg.textContent = "Invalid PAN*";
            return false;
        }
    }
    let panValue = panEl.value.trim();
    let panErr = document.getElementById("panErr");
    if (panValue === "") {
        panErr.textContent = "PAN is required*";
        panValidation = false;
    } else if (validatePAN() === true) {
        panValidation = true;
    }
});

amtEl.addEventListener("blur", function() {
    let amtErrMsg = document.getElementById("amtErr");
    var pattern = /^\d+\.?\d*$/;
    let number = amtEl.value.trim();
    if (number === "") {
        amtValidation = false;
        amtErrMsg.textContent = "Amount is required*";
    } else if (pattern.test(number) === false) {
        amtValidation = false;
        amtErrMsg.textContent = "Invalid Amount Please enter amount in numbers*";
    } else if (pattern.test(number) === true) {
        amtValidation = true;
        if (number.includes(".")) {
            amtValue = parseFloat(number);
        } else {
            amtValue = parseInt(number);
        }
        amtErrMsg.textContent = "";
    } else {
        amtValidation = false;
        amtErrMsg.textContent = "Invalid Amount Please enter amount in numbers*";
    }
});
