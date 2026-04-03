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
let profileName = document.getElementById("profileName");
if(profileName){
    profileName.innerText = loggedUser;
}
    }
}


// ===== LOGOUT =====
function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

// ===== ADD NOTE =====
function addNote(){

    let noteInput = document.getElementById("noteInput");
    let noteText = noteInput.value;

    if(noteText === ""){
        alert("Write something first");
        return;
    }

    let loggedUser = localStorage.getItem("loggedInUser");

    let notes = JSON.parse(localStorage.getItem(loggedUser + "_notes")) || [];

    notes.push(noteText);

    localStorage.setItem(loggedUser + "_notes", JSON.stringify(notes));

    noteInput.value = "";

    loadNotes();
}


// ===== LOAD NOTES =====
function loadNotes(){

    let loggedUser = localStorage.getItem("loggedInUser");

    let notes = JSON.parse(localStorage.getItem(loggedUser + "_notes")) || [];

    let notesList = document.getElementById("notesList");

    if(!notesList) return;

    notesList.innerHTML = "";

    notes.forEach((note, index) => {

        notesList.innerHTML += `
            <li>
                ${note}
                <button onclick="deleteNote(${index})">❌</button>
            </li>
        `;
    });
}


// ===== DELETE NOTE =====
function deleteNote(index){

    let loggedUser = localStorage.getItem("loggedInUser");

    let notes = JSON.parse(localStorage.getItem(loggedUser + "_notes"));

    notes.splice(index,1);

    localStorage.setItem(loggedUser + "_notes", JSON.stringify(notes));

    loadNotes();
}


// Auto load notes on dashboard
window.onload = function(){
    loadNotes();
}

// ===== DARK MODE =====
function toggleTheme(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}


// load saved theme
(function(){
    let savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
    }
})();


// ===== PROFILE PHOTO UPLOAD =====
function uploadProfilePic(){

    let file = document.getElementById("uploadPic").files[0];
    let reader = new FileReader();

    reader.onload = function(){
        let loggedUser = localStorage.getItem("loggedInUser");

        localStorage.setItem(loggedUser+"_profilePic", reader.result);

        document.getElementById("profilePic").src = reader.result;
    }

    reader.readAsDataURL(file);
}


// load saved profile pic
(function(){
    let loggedUser = localStorage.getItem("loggedInUser");

    let savedPic = localStorage.getItem(loggedUser+"_profilePic");

    if(savedPic && document.getElementById("profilePic")){
        document.getElementById("profilePic").src = savedPic;
    }
})();



.stats{
    display:flex;
    justify-content:center;
    gap:20px;
    margin:20px;
}

.card{
    padding:20px;
    width:150px;
    text-align:center;
    border-radius:15px;
    background:rgba(255,255,255,0.15);
    backdrop-filter:blur(15px);
}