const foodziDonateButton = () => {
    let nama = document.getElementById('namafoodzi').value
    let alamat = document.getElementById('alamatfoodzi').value
    let jabatan = document.getElementById('jabatanfoodzi').value
    let makanan = document.getElementById('makananfoodzi').value
    let donasi = document.getElementById('donasifoodzi').value
    let keterangan = document.getElementById('keteranganfoodzi').value

    const url = "https://wa.me/6281347971941?text=" 
    + "*DONASI Mba 'FoodZi' ACTING*" + "%0a"
    + "Nama: " + `${nama}` + "%0a"
    + "Alamat: " + `${alamat}` + "%0a"
    + "Jabatan: " + `${jabatan}`  + "%0a"
    + "Jenis Makanan: " + `${makanan}`  + "%0a"
    + "Total Donasi: " + `Rp. ${donasi}`  + "%0a"
    + "Keterangan: " + `${keterangan}`; 
    
    window.open(url, '_blank').focus()
}

const kbButton = () => {
    let nama = document.getElementById('namakb').value
    let nik = document.getElementById('nikkb').value
    let kk = document.getElementById('kkkb').value
    let alamat = document.getElementById('alamatkb').value
    let kecamatan = document.getElementById('kecamatankb').value
    let anak = document.getElementById('anakkb').value
    let jenis = document.getElementById('jeniskb').value
    let keterangan = document.getElementById('keterangankb').value

    const url = "https://wa.me/6281347971941?text=" 
    + "*CHECK IN LAYANAN KB*" + "%0a"
    + "Nama: " + `${nama}` + "%0a"
    + "Nik: " + `${nik}` + "%0a"
    + "No. KK: " + `${kk}` + "%0a"
    + "Alamat: " + `${alamat}` + "%0a"
    + "Kecamatan: " + `${kecamatan}`  + "%0a"
    + "Jumlah Anak: " + `${anak}`  + "%0a"
    + "Jenis KB: " + `${jenis}`  + "%0a"
    + "Keterangan: " + `${keterangan}`; 
    
    window.open(url, '_blank').focus()
}
