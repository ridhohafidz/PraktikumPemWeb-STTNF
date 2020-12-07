function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "ahmad2017" && password == "integrity") {
        alert("Login successfully");
        window.location.href = 'login-sukses.html';
    } 
    else {
        alert("Username dan password salah");
    }
    return false;
}