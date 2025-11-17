// SIMPLE JAVASCRIPT - PASTI BEKERJA
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("formPendaftaran");
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Ambil semua data dari form
        const data = {
            nama: document.getElementById("nama").value,
            kelas: document.getElementById("kelas").value,
            agama: document.getElementById("agama").value,
            jk: document.getElementById("jk").value,
            kota: document.getElementById("kota").value,
            tgl: document.getElementById("tgl").value,
            ayah: document.getElementById("ayah").value,
            ibu: document.getElementById("ibu").value,
            hp: document.getElementById("hp").value,
            ortu: document.getElementById("ortu").value,
            email: document.getElementById("email").value,
            alamat: document.getElementById("alamat").value,
            goldar: document.getElementById("goldar").value,
            hobi: document.getElementById("hobi").value,
            penyakit: document.getElementById("penyakit").value,
            angkatan: document.getElementById("angkatan").value,
            tahun: document.getElementById("tahun").value,
            timestamp: new Date().toLocaleString()
        };

        // Simpan ke localStorage
        const semuaData = JSON.parse(localStorage.getItem('dataPendaftaranHalilintar') || '[]');
        semuaData.push(data);
        localStorage.setItem('dataPendaftaranHalilintar', JSON.stringify(semuaData));
        
        // Tampilkan pesan sukses
        alert('🎉 PENDAFTARAN BERHASIL!\n\nData ' + data.nama + ' telah disimpan.');
        
        // Reset form
        form.reset();
    });
});