function login(){
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(user === savedUser && pass === savedPass){

        localStorage.setItem("loggedInUser", user);

        alert("Login Successful ✅");
        window.location.href="dashboard.html";

    }else{
        alert("Wrong Username or Password ❌");
    }
}

// Show username on dashboard
if(window.location.pathname.includes("dashboard.html")){
    let user = localStorage.getItem("loggedInUser");
    document.getElementById("welcomeUser").innerText =
        "Hello, " + user + " 👋";
}

function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href="index.html";
}