// No.1
let nama = prompt('No.1 Siapa nama anda?')
let gajiPokok = 30000
let tunj = 0.20 * gajiPokok
let pjk = 0.15 * (gajiPokok + tunj)
let gajiBersih = gajiPokok + tunj - pjk

console.log(`No.1 jadi nama anda adalah ${nama} tunjangan yang anda dapat adalah ${tunj} tetapi karena ada biaya pajak sebesar ${pjk} jadi uang anda sekarang sekitar Rp ${gajiBersih}`)

// // No.2
let jam = parseFloat(prompt('No.2 silahkan masukkan nominal jam anda?'))
let menit = parseFloat(prompt('No.2 silahkan masukkan nominal menit anda?'))
let detik = parseFloat(prompt('No.2 silahkan masukkan nominal detik anda?'))
let jumlahJam = jam * 60 * 60
let jumlahMenit = menit * 60
let totalDetik = jumlahJam + jumlahMenit + detik

console.log(`No.2 Total detik dari waktu diatas adalah ${totalDetik} detik`)

// No.3
let detikInput = parseFloat(prompt('No.3 masukkan detik anda?'))
let jamInput = detikInput / 3600
let jamBilangan = Math.floor(jamInput)
let hasilJam = jamBilangan * 3600
let menitInput = (detikInput - hasilJam) / 60
let menitBilangan = Math.floor(menitInput)
let hasilMenit = menitBilangan * 60
let sisaDetik = detikInput - hasilJam - hasilMenit

console.log(`No.3 jadi detik yang anda masukkan sebesar ${detikInput} detik dan telah di konversi kan menjadi ${jamBilangan} jam , ${menitBilangan} menit dan ${sisaDetik} detik`)