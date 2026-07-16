const nama = "Adlan zuhnun awanta";
const kelas = "XI RPL 2";
let umur = 16;

console.log("Nama:", nama);
console.log("Kelas:", kelas);
console.log("Umur:", umur);

const perkalian = (a, b) => a * b;
console.log(perkalian(5, 6));

const kotak = document.getElementById("kotak");
kotak.textContent = "Halo Dunia";

const tombol = document.getElementById("tombol-ubah");
const statusUbah = document.getElementById("status-ubah");

tombol.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    tombol.style.backgroundColor = "green";
    statusUbah.textContent = "Background berhasil diubah";
});

