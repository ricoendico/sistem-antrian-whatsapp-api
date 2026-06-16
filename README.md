# 🏥 Sistem Antrean Digital - Klinik Sehat

Tugas kelompok mata kuliah Building Web (JavaScript + Express.js).

Ini adalah aplikasi web untuk ngatur antrean di klinik atau puskesmas biar lebih rapi. Pengunjung bisa ambil tiket sendiri lewat layar (kiosk), dan petugas bisa manggil antrean dari halaman admin. Biar makin canggih, web ini juga dilengkapi fitur **Suara Robot Pemanggil** dan **Notif WhatsApp Otomatis**!

---

## 👥 Anggota Kelompok & Jobdesk

Proyek ini dikerjakan bareng-bareng sama 4 orang, dengan pembagian tugas:

1. **Arif Rahmat Darmawan (202451079) - Backend & Admin Panel**
   - Bikin server pakai Node.js dan Express.js.
   - Ngatur database sementara buat nyimpen data urutan antrean.
   - Bikin halaman Admin buat ngontrol antrean (tombol panggil selanjutnya, panggil ulang, dan milih loket).

2. **Ahmad Saefum Minan (202451083) - Layar Monitor & Sistem Suara**
   - Bikin tampilan Layar Monitor besar yang dipasang di ruang tunggu.
   - Nyambungin layar monitor ke server biar angkanya auto-update tanpa perlu di-refresh.
   - Nambahin fitur suara Google (Text-to-Speech) yang otomatis bacain nomor waktu admin mencet tombol panggil.

3. **Rico Endico (202451086) - Frontend Kiosk & Fitur Cetak**
   - Mendesain halaman utama dan halaman ambil tiket buat pengunjung pakai Tailwind CSS.
   - Bikin animasi *loading* waktu tiket diambil.
   - Bikin fitur *Pop-up* struk antrean dan ngatur CSS Print biar waktu di-print, yang keluar cuma struknya aja.

4. **Marcel Ilham Putra (202451106) - Integrasi API WhatsApp & Deployment**
   - Nyambungin web ke API Fonnte biar bisa ngirim pesan WhatsApp.
   - Bikin logika otomatis: kalau antrean sisa 5, kirim WA suruh siap-siap. Kalau gilirannya tiba, kirim WA suruh ke loket.
   - Ngetes error (QA), nulis dokumentasi (README ini), dan nge-deploy web ke internet biar bisa diakses online.

---

## ✨ Fitur Utama Aplikasi

* **🎟️ Ambil Tiket & Cetak Struk:** Pengunjung bisa masukin nomor WA, klik ambil tiket, lalu cetak struk antreannya.
* **📺 Layar Monitor Real-time:** Nampilin nomor antrean besar. Waktu nomor ganti, bakal ada suara robot yang bacain "Nomor antrean 5, silakan menuju Loket 1".
* **🎛️ Panel Admin Mudah:** Admin tinggal klik-klik aja buat manggil antrean atau ngarahin pasien ke loket tertentu (Loket 1, 2, atau 3).
* **💬 Pengingat via WhatsApp:** Pasien nggak harus nunggu di ruang tunggu. Waktu antrean sisa 5 orang lagi, pasien bakal dapet WA peringatan.

---

## 💻 Teknologi yang Dipakai

* **Backend:** Node.js, Express.js
* **Frontend:** HTML biasa, CSS pakai Tailwind, JavaScript Vanilla
* **Pihak Ketiga:** Fonnte (buat API WhatsApp), Web Speech API (buat suara pemanggil)

---

## 🚀 Cara Jalanin Web Ini di Laptop Sendiri

Buat ngejalanin aplikasi ini di komputer, ikutin langkah simpel ini:

1. Download atau *clone* folder web ini.
2. Buka terminal di dalam foldernya, terus ketik perintah ini buat install Express:
   ```bash
   npm install