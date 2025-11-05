function login(username, callback) {
    console.log("Memeriksa username....");

    setTimeout(() => {
        if(username === "admin") {
            callback(null, "Login Berhasil!");
        } else {
            callback("Username salah!");
        }
    }, 1000);
}

module.exports = login;