const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
 
//localstorage에 userName있으면 id="greeting"바로 보여주고 . 
//아니면, form id="login-form"바로 보여주고 처음부터 로그인 하게 만듦.
    const HIDDEN_CLASSNAME ="hidden"; 
 
    function loginSubmit(event){
        event.preventDefault(); //기본 실행들 prevent
        const userName = loginInput.value; //name값 받아오기
        localStorage.setItem("userName", userName); //userName기억하기
        loginForm.classList.add(HIDDEN_CLASSNAME); //input창 없애기
        greeting.innerText = `Hello ${userName} :) `; //인사 보여주기
        greeting.classList.remove(HIDDEN_CLASSNAME); //h1보여주기
    }

    if(localStorage.getItem("userName")===null){ //비어있으면 
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", loginSubmit); //submit시, 브라우저가 함수호출
    }else{ //이미userName있으면
        
    const userName = localStorage.getItem("userName"); //이름 가져오고
    greeting.innerText = `Hello ${userName} :) `; //인사말 넣고 
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1 보여주기
    }

 