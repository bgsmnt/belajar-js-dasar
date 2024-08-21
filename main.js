// TUGAS KECIL

/*
1. promt untuk mengetahui saldo akhir dari apa yang diinputkan user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/

// Prompt untuk mengetahui saldo akhir dari inputan pengguna
let saldoAwal = parseFloat(prompt("Masukkan saldo awal Anda:"));
let pendapatan = parseFloat(prompt("Masukkan jumlah pendapatan Anda:"));
let pengeluaran = parseFloat(prompt("Masukkan jumlah pengeluaran Anda:"));
let saldoAkhir = saldoAwal + pendapatan - pengeluaran;
console.log(`Saldo akhir Anda adalah: ${saldoAkhir}`);



// Menentukan hari dari tanggal saat ini
var hari = new Date().getDay();
var namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
console.log(`Hari ini adalah hari ${namaHari[hari]}`);
