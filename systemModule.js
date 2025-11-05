const fs = require("fs");

function buatLaporan(username, penghasilan) {
    const laporan = `Laporan Penghasilan Admin\nNama: ${username}\nPenghasilan: Rp${penghasilan}\n`;
    fs.writeFileSync("laporan.txt", laporan);
    console.log("Laporan berhasil dibuat: laporan.txt");
}

module.exports = buatLaporan;