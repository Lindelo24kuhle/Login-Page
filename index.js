let loginButton = document.getElementById("login");
let checkboxButton = document.getElementById("robot");

let isLogin = true;

function toggleLogin() {
    isLogin = !isLogin;

    if (isLogin) {
        loginButton.textContent = "Log In";
        loginButton.style.backgroundColor = ""; 
    } else {
        loginButton.textContent = "Please wait...";
        loginButton.style.backgroundColor = "green";
    }
}

let isRobot = true;

function toggleRobotStatus() {

    isRobot = !isRobot;
    
    if (isRobot) {
        checkboxButton.textContent = "You are a robot";
        checkboxButton.style.backgroundColor = " ";
    } else {
        checkboxButton.textContent = "You are not a robot";
        checkboxButton.style.backgroundColor = "blue";
    }
}




function togglePasswordVisibility() {
    let passwordField = document.getElementById("password");
    let unhideIcon = document.getElementById("unhide");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        unhideIcon.innerHTML = "&#128064;"; // Change to hide icon
    } else {
        passwordField.type = "password";
        unhideIcon.innerHTML = "&#128065;"; // Change to unhide icon
    }
}