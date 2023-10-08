let loginButton = document.getElementById("login");
let checkboxButton = document.getElementById("robot");
let passwordField = document.getElementById("password");
let unhideIcon = document.getElementById("unhide");

let isLogin = true;
let isRobot = true;

function toggleButton(button, state1Text, state2Text, state1Color, state2Color) {
    if (button && isLogin) {
        button.textContent = state1Text;
        button.style.backgroundColor = state1Color;
    } else {
        button.textContent = state2Text;
        button.style.backgroundColor = state2Color;
    }
}

function toggleLogin() {
    isLogin = !isLogin;
    toggleButton(loginButton, "Log In", "Please wait...", "", "green");
}

function toggleRobotStatus() {
    isRobot = !isRobot;
    toggleButton(checkboxButton, "You are not a robot", "You are a robot", "blue", "");
}

function togglePasswordVisibility() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        unhideIcon.innerHTML = "&#128064;"; 
    } else {
        passwordField.type = "password";
        unhideIcon.innerHTML = "&#128065;"; 
    }
}
