const nama = "Adlan zuhnun awanta";
const kelas = "XI Rpl 2";
let umur = 16; 

console.log("=== Tugas 1: Variabel ===");
console.log("Nama: " + nama);
console.log("Kelas: " + kelas);
console.log("Umur: " + umur + " tahun");

const perkalian = (a, b) => a * b;

console.log("\n=== Tugas 2: Arrow Function ===");
console.log("Hasil perkalian (5, 6) = " + perkalian(5, 6));

const kotakWelcome = document.getElementById("kotak-welcome");
if (kotakWelcome) {
    kotakWelcome.textContent = "Halo Dunia";
}

const btnUbah = document.getElementById("btnUbah");
const pesanSukses = document.getElementById("pesanSukses");

btnUbah.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    btnUbah.style.backgroundColor = "green";
    btnUbah.style.color = "white";
    pesanSukses.textContent = "Background berhasil diubah";
});
