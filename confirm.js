let nameEl = document.getElementById("name");
let Name = nameEl.value.trim().split(" ");
let fName = document.getElementById("firstName");
fName.textContent = Name[0];

let emailEl = document.getElementById("email");
let mail = document.getElementById("userEmail");
 mail.textContent = emailEl.value;

let randomCode = Math.floor(Math.random() * 10000);
console.log(randomCode);
let r = window.location.search;
let btnEl = document.getElementById("button");

btnEl.addEventListener("click",function(){
    let errMsg = document.getElementById("otpErr");
    errMsg.textContent = r;
    let otpInput = document.getElementById("otp");
    let amtValidationEl = document.getElementById("validation");
    let val = parseInt(otpInput.value);
    if(val===randomCode){
        errMsg.textContent = "Validation Successfull"
    }
    else{
        errMsg.textContent="Validation Failed"
    }
    
});
