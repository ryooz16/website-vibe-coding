# Rio Corporate — Website Profil Perusahaan

Website profil perusahaan modern yang dibangun dengan React dan Vite. Menampilkan desain yang elegan dengan efek glassmorphism, animasi interaktif, dan tampilan yang responsif untuk semua ukuran layar.

---

## ✨ Fitur Utama

- **Navbar Glassmorphism** — navbar transparan yang berubah menjadi kaca buram saat halaman di-scroll, dengan hamburger menu animatif di mode mobile
- **Hero Section** — background gambar berkualitas tinggi dengan overlay gradien dan tombol CTA animatif
- **About Us** — layout dua kolom dengan statistik perusahaan dan gambar tim
- **Services** — kartu layanan interaktif dengan efek hover dan ikon modern
- **Testimonials** — kartu testimoni klien dengan foto avatar
- **Contact** — form kontak modern dengan ikon informasi berwarna
- **Footer** — footer minimalis dengan link media sosial
- **Fully Responsive** — tampilan optimal di desktop, tablet, dan smartphone

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Kegunaan |
|---|---|---|
| **React** | ^19.0.0 | Library utama untuk membangun UI berbasis komponen |
| **Vite** | ^6.2.0 | Build tool modern yang cepat dengan Hot Module Replacement (HMR) |
| **Tailwind CSS** | ^3.x | Utility-first CSS framework untuk styling yang cepat dan konsisten |
| **lucide-react** | latest | Library ikon SVG modern dan ringan |
| **PostCSS** | ^8.x | Pemrosesan CSS untuk Tailwind |
| **ESLint** | ^9.x | Linter untuk menjaga kualitas kode |

---

## 🎨 Design System

### Palet Warna

| Token | Warna | Kode Hex |
|---|---|---|
| `brand-primary` | Indigo | `#4f46e5` |
| `brand-primaryHover` | Indigo Gelap | `#4338ca` |
| `brand-primaryLight` | Indigo Terang | `#818cf8` |
| `brand-dark` | Biru Tua | `#0f172a` |
| `brand-black` | Hitam | `#0a0a0a` |
| `brand-gray` | Abu-abu | `#6b7280` |
| `brand-white` | Putih | `#ffffff` |

### Efek Visual
- **Glassmorphism** — `backdrop-blur` + background semi-transparan
- **Hover Transitions** — `translate-y`, `scale`, dan perubahan warna yang halus
- **Scroll-based Styling** — navbar berubah tampilan berdasarkan posisi scroll dengan teknik hysteresis

---

## 📁 Struktur Proyek

```
website-vibe-coding/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigasi utama dengan glassmorphism
│   │   ├── Hero.jsx          # Section utama / landing
│   │   ├── AboutUs.jsx       # Section tentang perusahaan
│   │   ├── Services.jsx      # Section layanan
│   │   ├── Testimonials.jsx  # Section testimoni klien
│   │   ├── Contact.jsx       # Section form kontak
│   │   └── Footer.jsx        # Footer website
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & Tailwind directives
├── tailwind.config.js        # Konfigurasi tema & warna kustom
├── vite.config.js
└── package.json
```

---

## 🚀 Cara Menjalankan

### Prasyarat
- **Node.js** versi 18 atau lebih baru
- **npm** atau **yarn**

### Instalasi & Menjalankan Secara Lokal

```bash
# Clone repository
git clone https://github.com/ryooz16/website-vibe-coding.git
cd website-vibe-coding

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka browser dan akses `http://localhost:5173`

### Build untuk Produksi

```bash
npm run build
```

---

## 📦 Scripts

| Script | Perintah | Deskripsi |
|---|---|---|
| Dev Server | `npm run dev` | Menjalankan server pengembangan dengan HMR |
| Build | `npm run build` | Membuat bundle produksi yang dioptimalkan |
| Preview | `npm run preview` | Preview hasil build secara lokal |
| Lint | `npm run lint` | Menjalankan ESLint untuk cek kualitas kode |

---

## 🖼️ Sumber Gambar

Gambar yang digunakan pada website ini diambil dari [Unsplash](https://unsplash.com) dan digunakan untuk tujuan demonstrasi. Untuk deployment produksi, ganti dengan aset gambar resmi perusahaan Anda.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan pengembangan. Bebas dimodifikasi sesuai kebutuhan.
