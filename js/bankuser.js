function userdata() {
    var userdata = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;

    fetch("authenicate.php", {method: "POST", body: data})
    .then(res => res.text())
    .then(txt => console.log(txt))
    .catch(err => console.error(err));
        return false;
}