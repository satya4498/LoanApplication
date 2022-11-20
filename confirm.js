let nameEl = sessionStorage.getItem("name");
console.log(nameEl);
let Name = nameEl.split(" ");
let fName = document.getElementById("firstName");
fName.textContent = Name[0];

let emailEl = sessionStorage.getItem("email");
let mail = document.getElementById("userEmail");
 mail.textContent = emailEl;

let randomCode = Math.floor(Math.random() * 10000);
console.log(randomCode);
let r = window.location.search;
let btnEl = document.getElementById("button");
let formEl = document.getElementById("confirmForm");

btnEl.addEventListener("click",function(){
    let errMsg = document.getElementById("otpErr");
    errMsg.textContent = r;
    let otpInput = document.getElementById("otp");
    let otpValidationEl = document.getElementById("validation");
    let val = parseInt(otpInput.value);
    let container = document.getElementById("otpContainer");
    let otpCount = 1;
    if(val===randomCode){
        container.removeChild(otpValidationEl);
        errMsg.textContent = "Validation Successfull"
        errMsg.style.color = "green";
        container.appendChild(errMsg);
        formEl.action = "http://pixel6.co/";

    }
    else if(val!==randomCode && otpCount<=3){ 

        errMsg.textContent="Please Enter the correct otp";
        otpCount++;
    }
    else{
        container.removeChild(otpValidationEl);
        errMsg.textContent = "Validation Failed";
        container.appendChild(errMsg);
       
    }
    
});
