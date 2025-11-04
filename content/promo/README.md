# Panduan Mengelola Promo

## Struktur Folder
```
content/promo/           # Folder untuk file markdown promo
public/img/promo/        # Folder untuk gambar promo
```

## Cara Menambah Promo Baru

### 1. Buat File Markdown Baru
Buat file baru di folder `content/promo/` dengan nama yang sesuai, misalnya: `diskon-lebaran-2025.md`

### 2. Format File Markdown
Setiap file promo harus memiliki frontmatter (metadata) di bagian atas dengan format berikut:

```markdown
---
title: "Judul Promo Anda"
description: "Deskripsi singkat promo (1-2 kalimat)"
category: "Kategori Promo"
image: "/img/promo/nama-gambar.webp"
active: true
validUntil: "2025-12-31"
promoCode: "KODE PROMO"
---

## Detail Promo

Tuliskan detail promo di sini...

## Syarat & Ketentuan

- Syarat 1
- Syarat 2
- dst...

## Cara Klaim

1. Langkah 1
2. Langkah 2
3. dst...
```

### 3. Penjelasan Field Frontmatter

- **title**: Judul promo (akan muncul di card dan halaman detail)
- **description**: Deskripsi singkat promo (muncul di card promo)
- **category**: Kategori promo (contoh: "Travel Antar Kota", "Wisata Religi", "Travel Grup")
- **image**: Path ke gambar promo (simpan di `public/img/promo/`)
- **active**: `true` atau `false` (promo akan muncul hanya jika `true`)
- **validUntil**: Tanggal berakhir promo dalam format "YYYY-MM-DD"
- **promoCode**: Kode promo yang harus disebutkan customer

### 4. Menambah Gambar Promo

1. Simpan gambar promo di folder `public/img/promo/`
2. Format gambar yang disarankan: WebP atau JPG
3. Ukuran yang disarankan: 1200x800px atau rasio 3:2
4. Nama file sebaiknya sesuai dengan slug promo (contoh: `diskon-surabaya.webp`)

### 5. Contoh Promo Lengkap

```markdown
---
title: "Diskon 20% Rute Malang"
description: "Dapatkan diskon 20% untuk semua jadwal travel Banyuwangi-Malang. Promo terbatas!"
category: "Travel Antar Kota"
image: "/img/promo/diskon-malang.webp"
active: true
validUntil: "2025-06-30"
promoCode: "MALANG20"
---

## Detail Promo

Nikmati diskon 20% untuk perjalanan travel Banyuwangi - Malang (pulang-pergi).
Promo berlaku untuk semua jadwal keberangkatan!

## Syarat & Ketentuan

- Berlaku untuk semua jadwal (pagi, siang, malam)
- Pemesanan minimal H-1
- Sebutkan kode promo "MALANG20" saat booking
- Tidak dapat digabungkan dengan promo lainnya
- Promo berlaku sampai 30 Juni 2025

## Cara Klaim

1. Hubungi admin kami via WhatsApp
2. Sebutkan kode promo: **MALANG20**
3. Pilih jadwal keberangkatan
4. Diskon otomatis dipotong dari total tagihan
```

## Cara Menonaktifkan Promo

Ada 2 cara untuk menonaktifkan promo:

### Cara 1: Ubah Status Active
Ubah `active: true` menjadi `active: false` di frontmatter

### Cara 2: Ubah Tanggal Expired
Ubah `validUntil` ke tanggal yang sudah lewat

## Kategori Promo yang Tersedia

- **Travel Antar Kota**: Promo untuk rute travel reguler
- **Wisata Religi**: Promo untuk wisata wali, umroh
- **Travel Grup**: Promo untuk rombongan
- **Paket Express**: Promo untuk pengiriman paket
- **Tiket**: Promo untuk tiket pesawat/bus/kapal
- **Special Event**: Promo event khusus (lebaran, tahun baru, dll)

## Tips Menulis Promo yang Menarik

1. **Judul yang jelas dan menarik**
   - ✅ "Diskon 50% Rute Surabaya Akhir Pekan"
   - ❌ "Promo Travel"

2. **Deskripsi singkat tapi informatif**
   - Sebutkan benefit utama
   - Sebutkan periode/kondisi penting

3. **Syarat & Ketentuan yang jelas**
   - Minimal pemesanan
   - Periode berlaku
   - Cara klaim
   - Ketentuan khusus

4. **Kode promo yang mudah diingat**
   - ✅ "SURABAYA50", "LEBARAN2025"
   - ❌ "PROMO123XYZ"

## Urutan Tampilan Promo

Promo akan ditampilkan berdasarkan:
1. Hanya promo yang `active: true`
2. Hanya promo yang belum expired (validUntil >= hari ini)
3. Diurutkan dari yang paling dekat expired (untuk mendorong urgency)

## Troubleshooting

### Promo tidak muncul di website
- Cek apakah `active: true`
- Cek apakah `validUntil` masih di masa depan
- Cek apakah format frontmatter sudah benar
- Cek apakah file disimpan dengan extension `.md`

### Gambar tidak muncul
- Cek apakah gambar sudah ada di `public/img/promo/`
- Cek apakah path di field `image` sudah benar
- Path harus diawali dengan `/` (contoh: `/img/promo/gambar.webp`)

### Error saat build
- Pastikan semua field required ada di frontmatter
- Pastikan format tanggal `validUntil` benar (YYYY-MM-DD)
- Pastikan tidak ada karakter special di frontmatter
