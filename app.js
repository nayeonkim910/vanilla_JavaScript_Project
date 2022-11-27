const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event){ 
    
    event.preventDefault();
    const userName = loginInput.value;  
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("userName", userName);    
    greeting.innerText = `Hello ${userName} :) `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", loginSubmit);

 