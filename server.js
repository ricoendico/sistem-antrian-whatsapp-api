const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Token Fonnte
const FONNTE_TOKEN = 'pDQnu5ZBhHR9UL5FkS5i'; 

// Data Antrean Sementara
let dataAntrean = {
    current: 0,
    last: 0,
    queue: [], 
    lastCallTimestamp: null,
    loket: 'Loket 1'
};

// Fungsi Kirim Notifikasi WA (Sekarang menerima teks pesan dinamis)
async function kirimNotifikasiWA(nomorTujuan, teksPesan) {
    if (!nomorTujuan) return; 

    try {
        const response = await fetch('https://api.fonnte.com/send', {
            method: 'POST',
            headers: {
                'Authorization': FONNTE_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                target: nomorTujuan,
                message: teksPesan,
                countryCode: '62' 
            })
        });

        const result = await response.json();
        console.log(`[Log WA] Pesan ke ${nomorTujuan}: ${result.detail || 'Terkirim'}`);
    } catch (error) {
        console.error('[Error WA]', error);
    }
}

// ================= API ENDPOINTS =================

app.get('/api/antrean/status', (req, res) => {
    res.json({
        current: dataAntrean.current,
        last: dataAntrean.last,
        sisaAntrean: dataAntrean.queue.length,
        lastCallTimestamp: dataAntrean.lastCallTimestamp,
        loket: dataAntrean.loket
    });
});

app.post('/api/antrean/ambil', (req, res) => {
    const noWa = req.body && req.body.noWa ? req.body.noWa : null; 

    dataAntrean.last++;
    
    dataAntrean.queue.push({
        nomor: dataAntrean.last,
        wa: noWa
    });

    res.json({ success: true, nomorBaru: dataAntrean.last });
});

app.post('/api/antrean/panggil', (req, res) => {
    const loket = req.body && req.body.loket ? req.body.loket : 'Loket 1'; 
    
    if (dataAntrean.queue.length > 0) {
        // 1. AMBIL ORANG PERTAMA (Yang gilirannya tiba)
        const pasienBerikutnya = dataAntrean.queue.shift(); 
        
        dataAntrean.current = pasienBerikutnya.nomor;
        dataAntrean.loket = loket;
        dataAntrean.lastCallTimestamp = Date.now(); 
        
        // ---> KIRIM WA KE-2: PANGGILAN MENUJU LOKET
        if (pasienBerikutnya.wa) {
            const pesanPanggilan = `*KLINIK SEHAT DIGITAL*\n\nHalo!\nNomor antrean Anda *${dataAntrean.current}* sedang dipanggil. Silakan segera menuju ke *${dataAntrean.loket}*.\n\nTerima kasih.`;
            kirimNotifikasiWA(pasienBerikutnya.wa, pesanPanggilan);
        }

        // ---> KIRIM WA KE-1: PERINGATAN SISA 5 ANTREAN
        // Setelah orang pertama ditarik, kita cek apakah antrean yang tersisa masih ada minimal 5 orang?
        // Jika antrean di indeks ke-4 (orang ke-5) memiliki nomor WA, kirim pesan peringatan.
        if (dataAntrean.queue.length >= 5) {
            const pasienPersiapan = dataAntrean.queue[4]; // Array dimulai dari 0, jadi ke-5 adalah indeks 4
            
            if (pasienPersiapan.wa) {
                const pesanPersiapan = `*PENGINGAT - KLINIK SEHAT DIGITAL*\n\nHalo!\nNomor antrean Anda *${pasienPersiapan.nomor}* sebentar lagi akan dipanggil (sisa 5 antrean lagi di depan Anda).\n\nMohon untuk mulai bersiap-siap menuju ruang tunggu.\n\nTerima kasih.`;
                kirimNotifikasiWA(pasienPersiapan.wa, pesanPersiapan);
            }
        }

        res.json({ success: true, nomorDipanggil: dataAntrean.current });
    } else {
        res.json({ success: false, message: "Tidak ada antrean yang menunggu." });
    }
});

app.post('/api/antrean/panggil-ulang', (req, res) => {
    const loket = req.body && req.body.loket ? req.body.loket : null;
    
    if (dataAntrean.current > 0) {
        dataAntrean.loket = loket || dataAntrean.loket;
        dataAntrean.lastCallTimestamp = Date.now(); 
        res.json({ success: true, message: "Memanggil ulang..." });
    } else {
        res.json({ success: false, message: "Belum ada antrean yang berjalan." });
    }
});

app.post('/api/antrean/reset', (req, res) => {
    dataAntrean = { current: 0, last: 0, queue: [], lastCallTimestamp: null, loket: 'Loket 1' };
    res.json({ success: true, message: "Antrean direset." });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});