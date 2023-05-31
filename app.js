const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
let result = document.querySelector('#big-container');
let emailOutput = document.querySelector('#success-result');
let ReturnEmail = document.querySelector('#second-container');
let SecondButton = document.querySelector('#btn');
ReturnEmail.style.display = "none";
form.addEventListener('submit' , (e) => {
    e.preventDefault();
    CheckInput();
});
function CheckInput () {
    const InputValue = emailInput.value.trim();
    if(InputValue === ''){
        setErreurFor(emailInput,'Valid email required');
    }
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){
        setErreurFor(emailInput,'Valid email required');
    }   else{
        setSuccessFor(emailInput);
        result.style.display = "none";
        ReturnEmail.style.display = "block";
         ShowEmail(emailInput);
        SecondButton.addEventListener('click',returnTheFirstPage);
    }
}

function setErreurFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'email erreur';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'email success';
}
function ShowEmail(input){
    emailOutput.textContent = input.value;

}

function returnTheFirstPage(){
    result.style.display = "block";
    ReturnEmail.style.display = "none";
}