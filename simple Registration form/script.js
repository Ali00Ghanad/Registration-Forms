const submit = document.getElementById("submit-btn");
const emptyFields = document.getElementById("empty-fields");
const matchPass = document.getElementById("match-password");
const allInputs = document.querySelectorAll(".user-input");
const password = document.getElementById("password-input");
const email = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const repeatedPassword = document.getElementById("repeated-password");
const form = document.querySelector(".form-body");
const welcomeMessage = document.querySelector(".congrats");

submit.addEventListener("click",(PD)=>{
    PD.preventDefault()
    let isConfirmed = false;
    allInputs.forEach((item)=>{
        if(!isConfirmed && password.value == repeatedPassword.value && password.value!=="" && item.value!=="" && emailValidate(email.value))
        {
            matchPass.style.display = "none";
            emptyFields.style.display = "none";
            welcomeMessage.style.display = "block";
            form.style.display = "none";
            isConfirmed = true;
            alert("WELCOME");
        }
        if(item.value ===""){
            emptyFields.style.display = "block";
            matchPass.style.display = "none";
        }
        else if(item.value !== "" && password.value !== repeatedPassword.value){
            emptyFields.style.display = "none";
            matchPass.style.display = "block";
        }
        else if(item.value!==""){
            emptyFields.style.display="none";
        }
        if(item.value==="" && password.value !== repeatedPassword.value){
            emptyFields.style.display = "block";
            matchPass.style.display = "block";
        }
        else if(password.value == repeatedPassword.value){
            matchPass.style.display = "none";
        }
    });
})
function emailValidate(email){
    regex = /^[^@]+@[a-zA-Z0-9.-]+\.(com|net|org)$/;
    if (regex.test(email)) {
        emailError.style.display = "none";
        return email
    } else {
        emailError.style.display = "block";
        return null;
    }
}