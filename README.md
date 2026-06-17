# 🏥 Sistem Antrean Digital - Klinik Sehat

Tugas kelompok mata kuliah Building Web (JavaScript + Express.js).

Ini adalah aplikasi web untuk ngatur antrean di klinik atau puskesmas biar lebih rapi. Pengunjung bisa ambil tiket sendiri lewat layar (kiosk), dan petugas bisa manggil antrean dari halaman admin. Biar makin canggih, web ini juga dilengkapi fitur **Suara Robot Pemanggil** dan **Notif WhatsApp Otomatis**!

---

## 👥 Anggota Kelompok & Jobdesk

Proyek ini dikerjakan bareng-bareng sama 4 orang, dengan pembagian tugas:

1. **Arif Rahmat Darmawan (202451079) - Backend & Admin Panel**
   - Bikin server pakai Node.js dan Express.js.
   - Mengatur database sementara untuk menyimpan data urutan antrean.
   - Bikin halaman Admin buat ngontrol antrean (tombol panggil selanjutnya, panggil ulang, dan milih loket).

2. **Ahmad Saefum Minan (202451083) - Display Monitor & Sistem Suara**
   - Membuat tampilan Layar untuk Monitor yang dipasang di ruang tunggu.
   - Menyambungkan layar monitor, sistem angkanya auto-update tanpa perlu di-refresh.
   - Menambahkan fitur suara Google (Text-to-Speech) yang otomatis bacain nomor waktu admin mencet tombol panggil.

3. **Marcel Ilham Putra (202451106) - Frontend Kiosk & Fitur Cetak**
   - Desain halaman utama dan halaman ambil tiket buat pengunjung mwnggunakan Tailwind CSS.
   - Membuat tampilan halaman tiket diambil.
   - Membua fitur struk antrean dan mengatur CSS Print agar waktu di-print, yang keluar hanya struknya saja.

4. **Rico Endico (202451086) - Integrasi API WhatsApp & Deployment**
   - Menyanbungkan web ke API Fonnte agar bisa mengirim pesan notifikasi WhatsApp.
   - Membuar logika otomatis: Jika antrean sisa 5, Norif WA akan mengirim pesan sisa antrian. Kalau gilirannya tiba, Notif WA akan memberitahu agar segera ke loket.
   - Testing error (QA), deploy web ke internet biar bisa diakses online menggunakan vercel.

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
