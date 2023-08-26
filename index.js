
let Name=document.getElementById('name');
let email=document.getElementById("email");
let number=document.getElementById("number");
let text=document.getElementById("textarea");
let button=document.getElementById("btn");

let nameError=document.querySelector("#nerror");
let emailError=document.getElementById("eerror");
let numberError=document.getElementById("berror");
let textError=document.getElementById("terror");

let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let numberRegex=/^[0-9]{10}/;


 button.addEventListener("click",(c)=>{
     c.preventDefault();

      nameVal=Name.value.trim();
     emailVal=email.value.trim();
      numberVal=number.value.trim();
      textVal=text.value.trim();

        validateName()
        validateemail()
        validatetext()
     validatenumber()

 })

 function validateName(){
    if(nameVal===""){
        nameError.innerHTML="Name is required"
        Name.style.border="1px solid red"
        return -1
    }
     else if(nameVal.length<3){
        nameError.innerHTML=" Enter a Proper Name"
        Name.style.border="1px solid red"
        return -1
     }
     else 
     nameError.innerHTML=""
     Name.style.border="3px solid green"
     return 1
 }
 function validateemail(){
    if(emailVal===""){
        emailError.innerHTML="email is required"
        email.style.border="1px solid red"

        return -1
    }
     else if(!emailVal.match(regex)){
        emailError.innerHTML=" Enter a Proper email"
        email.style.border="1px solid red"
        return -1
     }
     else 
     emailError.innerHTML=""
     email.style.border="3px solid green"
     return 1
 }
 
 function validatenumber(){
    if(numberVal===""){
        numberError.innerHTML="Number is required"
        number.style.border="1px solid red"
        return -1
    }
     else if(!numberVal.match(numberRegex)){
        // else if(numberVal.length=10){
        numberError.innerHTML=" Number length is 10 "
        number.style.border="1px solid red"
        return -1
     }
     else 
     numberError.innerHTML=""
     number.style.border="3px solid green"
     return 1
 }
 function validatetext(){
    if(textVal===""){
        textError.innerHTML="write somthing in the comment box"
        text.style.border="1px solid red"
        textError.style.color="red"
        textError.style.fontSize="1.5rem"
        textError.style.textAlign="end"

        return -1
    }
     else 
     textError.innerHTML=""
     text.style.border="3px solid green"
     return 1
 }

 
