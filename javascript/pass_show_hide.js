const pswrdField = document.querySelector(".form_signup  input[type=password]"),
toggleBtn =document.querySelector(".form_signup .field i ");


toggleBtn.onclick=() =>{
    if (pswrdField.type="password"){
        pswrdField.type ="text";
    toggleBtn.classList.add("active");
    }
    else{
        pswrdField.type ="password";
        toggleBtn.classList.remove("active");
    }
}
