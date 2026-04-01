// ===== SIGNUP =====
function signup() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup Successful ✅");

    window.location.href = "index.html";
}


// ===== LOGIN =====
function login(){

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(user === savedUser && pass === savedPass){

        localStorage.setItem("loggedInUser", user);

        alert("Login Successful ✅");
        window.location.href = "dashboard.html";

    }else{
        alert("Wrong Username or Password ❌");
    }
}


// ===== SHOW USER ON DASHBOARD =====
if(window.location.pathname.includes("dashboard.html")){

    let loggedUser = localStorage.getItem("loggedInUser");

    if(!loggedUser){
        alert("Please login first");
        window.location.href = "index.html";
    }else{
        document.getElementById("welcomeUser").innerText =
        "Welcome, " + loggedUser + " 👋";
    }
}


// ===== LOGOUT =====
function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}