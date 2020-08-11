const dataArray = [2, 25, 4, 14, 17, 30, 8];
let hasil = '';
tugas3 = (nilaiAwal, nilaiAkhir) => {
    if (nilaiAkhir < nilaiAwal) {
        hasil = "Nilai Awal Harus Lebih Kecil Dari Nilai Akhir";
    } else {
        if (dataArray.length < 5) {
            hasil = "Data Array harus Lebih Dari Lima";
        } else {
            let arr = dataArray.filter(e => {
                return e > nilaiAwal && e < nilaiAkhir;
            });
            if (arr.length == 0) {
                hasil = 'Jumlah angka dalam array tidak ada';
            } else {
                hasil = arr.sort((a, b) => a - b);
            }
        }
    }
    console.log(hasil);
}

tugas3(2, 3)