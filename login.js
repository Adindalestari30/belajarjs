const login = require("./callback");
const generateKey = require("./promise");
const buatLaporan = require("./systemModule");

login("admin", async (error, message) => {
    if (error) return console.log(error);
    console.log(message);
    
    const key = await generateKey();
    console.log("Key:", key);

    buatLaporan("admin", 5000000);
});
