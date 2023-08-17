url_api = "http://localhost/sanbong.api/api";

function userHeaders() {
    if (localStorage.getItem("userId") != null) {
        accountBtn.style.display = "block";
        logoutBtn.style.display = "block";
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
    } else {
        accountBtn.style.display = "none";
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        signupBtn.style.display = "block";
    }
}

function logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userPhone");
}

