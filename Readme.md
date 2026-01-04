# 📖 TajwidApps (Edu-Tajwid)

**TajwidApps** adalah platform edukasi berbasis web yang dirancang untuk membantu pengguna mempelajari hukum bacaan Al-Qur'an (Tajwid), makharijul huruf, dan sifat huruf secara fasih dan tartil.

Aplikasi ini dibangun sebagai *Static Web Application* yang modern, responsif, dan interaktif, memudahkan pengguna untuk belajar tajwid di mana saja melalui perangkat desktop maupun seluler.

---

## 🚀 Fitur Utama

### 1. Pembelajaran Terstruktur & Lengkap
Menyediakan kurikulum yang disusun sistematis mulai dari dasar hingga tingkat mahir. Materi dibagi menjadi 16 bab utama yang mencakup seluruh aspek penting ilmu Tajwid.

### 2. Antarmuka Modern & Responsif
* **Desain Adaptif**: Dibangun menggunakan **Bootstrap v5.3.3**, memastikan tampilan situs menyesuaikan otomatis di berbagai ukuran layar (HP, Tablet, Desktop).
* **Navigasi Ramah Seluler**: Menu navigasi yang mudah diakses dengan dukungan *off-canvas* atau *dropdown* untuk perangkat seluler.

### 3. Interaktivitas Pengguna
* **Animasi Halus**: Menggunakan **AOS (Animate On Scroll)** untuk memberikan efek visual menarik saat pengguna menggulir halaman.
* **Galeri Media**: Integrasi **GLightbox** untuk menampilkan video pembelajaran atau gambar ilustrasi tanpa meninggalkan halaman utama.
* **Testimonial Slider**: Fitur slider interaktif menggunakan **Swiper** untuk menampilkan ulasan pengguna.
* **Statistik Real-time**: Penghitung animasi (**PureCounter**) untuk menampilkan data statistik pengguna atau materi.

---

## 📚 Kurikulum Materi

Aplikasi ini mencakup 16 topik pembahasan Tajwid yang tersedia dalam halaman terpisah:

1.  **Hukum Nun Sukun Dan Tanwin** (Izhar, Idgham, Iqlab, Ikhfa)
2.  **Hukum Mim Sukun**
3.  **Hukum Mim Tasydid Dan Nun Tasydid**
4.  **Hukum Lam Tarif** (Syamsiyah & Qamariyah)
5.  **Hukum Lam Tebal dan Tipis** (Lafzul Jalalah)
6.  **Idgham Mutamatsilain**
7.  **Idgham Mutaqaribain**
8.  **Idgham Mutajanisain**
9.  **Hukum Bacaan Panjang (Mad)**
10. **Hukum Membaca Ra**
11. **Hukum Qalqalah**
12. **Bacaan Imalah Dan Isymam** (Gharib)
13. **Bacaan Naql Dan Tashil** (Gharib)
14. **Bacaan Saktah Dan Hukum Sad Dibaca Sin**
15. **Mad Fathah Dibaca Pendek**
16. **Hukum Waqaf Dan Ibtida'**

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dikembangkan menggunakan tumpukan teknologi berikut:

* **Frontend**: HTML5, CSS3, JavaScript (Vanilla).
* **Framework CSS**: Bootstrap v5.3.3.
* **Ikon**: Bootstrap Icons.
* **Library Eksternal** (Vendor):
    * `AOS` - Animasi scrolling.
    * `GLightbox` - Lightbox media galeri.
    * `Swiper` - Slider sentuh responsif.
    * `PureCounter` - Animasi angka statistik.
* **Backend (Opsional)**: PHP (untuk pemrosesan formulir kontak di folder `forms/`).

---

## 📂 Struktur Proyek

Berikut adalah gambaran struktur folder utama dalam repositori:

```text
TajwidApps/
├── assets/
│   ├── css/           # File gaya utama (main.css)
│   ├── img/           # Aset gambar (logo, ilustrasi, avatar)
│   ├── js/            # Logika JavaScript utama (main.js)
│   └── vendor/        # Pustaka pihak ketiga (Bootstrap, AOS, dll)
├── forms/             # Skrip PHP untuk formulir kontak
├── index.html         # Halaman Beranda (Landing Page)
├── materi-tajwid.html # Halaman Indeks Materi
├── service-details.html # Template detail layanan
└── [File Materi]      # File HTML materi individu (1Hukum... s/d 16Hukum...)
