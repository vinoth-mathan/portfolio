
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
let numberRegex=/^[0-9]{10}$/;


 button.addEventListener("click",(c)=>{
     c.preventDefault();
     let nameVal=Name.value.trim();
   let  emailVal=email.value.trim();
    let  numberVal=number.value.trim();
    let  textVal=text.value.trim();
    // function
     validateName(nameVal)
     validateemail(emailVal)
      validatetext(textVal)
     validatenumber(numberVal)
     //submit 
     if(validateName(nameVal)==1&&validateemail(emailVal)==1&&validatenumber(numberVal)==1&&validatetext(textVal)==1){
        if(confirm(`Your Message Sent Successfully
        ${nameVal}
        ${emailVal}
        ${numberVal}
        ${textVal}`)){
            Name.value='';                                                                                              
            email.value='';
            number.value='';
            text.value='';
            removeErr(nameError,Name,0);
            removeErr(emailError,email,0);
            removeErr(textError,text,0);
            removeErr(numberError,number,0);
        }
        
     }
    

 })
 // error
 function removeErr(err,input,time=3000){
    setTimeout(()=>{
        err.innerHTML=""
        input.style.border=""
    },time)
 }

 function validateName(a){
    // console.log(a)
    if(a===""){
        nameError.innerHTML="Name is required"
        Name.style.border="1px solid red"
        removeErr(nameError,Name)
        return -1
    }
     else if(a.length<3){
        nameError.innerHTML=" Enter a Proper Name"
        Name.style.border="1px solid red"
        removeErr(nameError,Name)
        return -1
     }
     else 
     nameError.innerHTML=""
     Name.style.border="3px solid green"
     return 1
 }
 
 function validateemail(emailVal){
    if(emailVal===""){
        emailError.innerHTML="email is required"
        email.style.border="1px solid red"
        removeErr(emailError,email)
        return -1
    }
     else if(!regex.test(emailVal)){
        emailError.innerHTML=" Enter a Proper email"
        email.style.border="1px solid red"
        removeErr(emailError,email)
        return -1
     }
     else 
     emailError.innerHTML=""
     email.style.border="3px solid green"
     return 1
 }
 
 function validatenumber(numberVal){
    console.log(!numberRegex.test(numberVal))
    if(numberVal===""){
        numberError.innerHTML="Number is required"
        number.style.border="1px solid red"
        removeErr(numberError,number)
        return -1
    }
    else if(!(/^[0-9\s(-)]*$/).test(numberVal)){
        numberError.innerHTML="Only Numbers allowed"
        number.style.border="1px solid red"
        removeErr(numberError,number)
        return -1
    }
    else if(!numberRegex.test(numberVal)){
        // else if(numberVal.length=10){
        numberError.innerHTML=" Number length is 10 "
        number.style.border="1px solid red"
        removeErr(numberError,number)
        return -1
     }
     else{
        numberError.innerHTML=""
        number.style.border="3px solid green"
        return 1
     } 
     
 }
 function validatetext(textVal){
    if(textVal===""){
        textError.innerHTML="write somthing in the comment box"
        text.style.border="1px solid red"
        textError.style.color="red"
        textError.style.fontSize="1.5rem"
        textError.style.textAlign="end"
        removeErr(textError,text)
        return -1
    }
     else 
     textError.innerHTML=""
     text.style.border="3px solid green"
     return 1
 }

 
