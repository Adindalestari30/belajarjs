function generateKey() {
    return new Promise((resolve) => {
        console.log("Membuat key...");
        setTimeout(() => {
            const key =
Math.random().toString(36).substring(2, 10);
            resolve(key);
        }, 1000);
    });
}

module.exports = generateKey;