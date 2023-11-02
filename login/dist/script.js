const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
/*function redirectToInicio() {

  window.location.href = "/index.html";
}*/

function validar(){
  var emaillog=document.getElementById("emaillog").value;
  var passlog=document.getElementById("passlog").value;
  if(emaillog=="Admin" && passlog=="umg123"){
    alert("Ingreso Admin");
    window.location.href = "/Admin/index.html";
    return false;
  }if(emaillog=="Abnermedina@gmail.com" && passlog=="abcd123-"){
    alert("Ingreso "+emaillog);
    window.location.href = "/index.html";
    return false;
  }else{
    attempt--;
  }
  alert("Te quedan " +attempt+ " intentos")
  if(attempt == 0){
    document.getElementById("emaillog").disable=true;
    document.getElementById("passlog").disable=true;
    document.getElementById("indexBtn").disable=true;
  }
}

// Asocia la función con el evento click del botón
/*const redirigirBtn = document.getElementById("indexBtn");
redirigirBtn.addEventListener("click", redirectToInicio);*/