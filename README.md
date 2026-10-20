# Qur'an Harian — Offline (paket gambar halaman 1–10)

Paket ini adalah aplikasi web statis untuk GitHub Pages, dengan jadwal/riwayat membaca, progres, dan dukungan service worker. Sepuluh gambar mushaf yang diberikan pengguna dimasukkan ke `assets/mushaf/001.webp` sampai `010.webp`, berdasarkan nomor halaman cetak yang tampak pada gambar.

## Isi paket
- `index.html`, `style.css`, `app.js`: antarmuka dan logika aplikasi.
- `manifest.json`: metadata aplikasi web.
- `service-worker.js`: menyimpan file aplikasi serta gambar halaman 1–10 ke cache offline saat instalasi.
- `assets/icon.svg`: ikon aplikasi.
- `assets/mushaf/001.webp`–`010.webp`: 10 gambar halaman yang disediakan.

## Penting
Paket ini hanya menyertakan 10 halaman, bukan keseluruhan 604 halaman. Saat membuka halaman 11–604, aplikasi akan memberi tahu bahwa gambar halaman belum tersedia. Periksa nomor dan susunan gambar terhadap mushaf cetak yang Anda gunakan.

## Cara unggah ke repositori GitHub yang sudah ada
1. Unduh ZIP ini dan ekstrak.
2. Buka repositori `QuranIndonesia` di GitHub.
3. Unggah **isi folder** `QuranIndonesia-Upload` ke root repositori, bukan folder `QuranIndonesia-Upload` itu sendiri. Di root harus terlihat `index.html`, `app.js`, `style.css`, `manifest.json`, `service-worker.js`, `README.md`, dan folder `assets`.
4. Tinjau file yang akan diganti lalu commit perubahan. Jangan menghapus data browser; riwayat lokal tidak disimpan di GitHub.
5. Pastikan Pages menerbitkan branch dan folder yang benar (biasanya `main` dan `/(root)`). Tunggu publikasi selesai.

## Uji mode offline
1. Buka website melalui alamat HTTPS GitHub Pages saat internet aktif.
2. Tunggu halaman selesai dimuat, lalu refresh sekali dan tunggu lagi agar service worker versi `quran-harian-v3` terpasang.
3. Buka halaman mushaf 1–10 ketika online agar gambar terlihat.
4. Aktifkan mode pesawat lalu buka kembali website di browser yang sama.
5. Jika versi lama masih tampil, matikan mode pesawat, buka website dan refresh dua kali, tunggu sebentar, lalu coba kembali. Jangan menghapus data situs jika ingin mempertahankan riwayat lokal.

## Catatan penyimpanan
Riwayat dan progres disimpan secara lokal pada browser/perangkat yang digunakan. Buat cadangan secara berkala melalui fitur aplikasi jika tersedia. Mode offline memerlukan HTTPS dan browser yang mendukung service worker.
