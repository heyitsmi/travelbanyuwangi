# Blog System Documentation

## Cara Menambahkan Post Baru

Sistem blog ini menggunakan file Markdown (.md) yang disimpan di folder `/content`. Setiap file markdown akan otomatis muncul di halaman blog jika memiliki property `published: true`.

### Langkah-Langkah:

1. **Buat file markdown baru** di folder `/content`
   - Nama file akan menjadi URL slug (contoh: `tips-travel.md` → `/blog/tips-travel`)
   - Gunakan format: huruf kecil, pisahkan dengan tanda hubung (-)

2. **Tambahkan Front Matter** di bagian atas file

3. **Tulis konten artikel** menggunakan Markdown

---

## Format Front Matter

Setiap file markdown harus dimulai dengan front matter (metadata) dalam format YAML:

```markdown
---
title: "Judul Artikel Anda"
excerpt: "Ringkasan singkat artikel (maks 200 karakter)"
date: "2025-01-15"
author: "Nama Penulis"
category: "Kategori Artikel"
image: "https://url-gambar-featured.jpg"
published: true
---
```

### Penjelasan Field:

- **title** (wajib): Judul artikel yang akan ditampilkan
- **excerpt** (wajib): Ringkasan singkat untuk preview di halaman blog
- **date** (wajib): Tanggal publikasi (format: YYYY-MM-DD)
- **author** (opsional): Nama penulis (default: "Admin")
- **category** (wajib): Kategori artikel (Tips Travel, Panduan Ziarah, Info Rute, dll)
- **image** (wajib): URL gambar featured untuk artikel
- **published** (wajib): `true` untuk mempublikasikan, `false` untuk draft

---

## Contoh Lengkap File Markdown

**Nama file**: `content/tips-hemat-travel.md`

```markdown
---
title: "10 Tips Hemat Saat Travel Antar Kota"
excerpt: "Ingin traveling hemat tapi tetap nyaman? Simak 10 tips jitu ini untuk menghemat biaya perjalanan antar kota Anda."
date: "2025-01-20"
author: "Tim Juragan Travel"
category: "Tips Travel"
image: "https://placehold.co/800x500/0077B6/FFFFFF?text=Tips+Hemat+Travel"
published: true
---

# 10 Tips Hemat Saat Travel Antar Kota

Traveling antar kota tidak harus mahal! Dengan perencanaan yang tepat, Anda bisa menghemat pengeluaran tanpa mengurangi kenyamanan perjalanan.

## 1. Booking Jauh-Jauh Hari

Semakin jauh Anda melakukan booking, semakin besar kemungkinan mendapat harga terbaik...

## 2. Pilih Waktu Off-Peak

Hindari musim liburan atau akhir pekan jika memungkinkan...

(konten selanjutnya...)
```

---

## Format Markdown yang Didukung

Sistem blog mendukung semua syntax Markdown standar:

### Heading
```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
```

### Lists
```markdown
- Item 1
- Item 2
  - Sub item

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Text link](https://url.com)
```

### Images
```markdown
![Alt text](https://url-image.jpg)
```

### Blockquotes
```markdown
> Ini adalah quote
```

### Code
```markdown
Inline `code`

\`\`\`javascript
// Code block
const hello = "world";
\`\`\`
```

---

## Kategori yang Tersedia

Gunakan salah satu kategori berikut untuk konsistensi:

- **Tips Travel** - Tips dan trik perjalanan
- **Panduan Ziarah** - Panduan wisata ziarah wali
- **Info Rute** - Informasi rute dan jadwal
- **Layanan Umroh** - Artikel tentang umroh dan haji
- **Lainnya** - Topik umum lainnya

---

## Cara Mempublikasikan Post

### Publish Post Baru:
1. Set `published: true` di front matter
2. Simpan file
3. Post akan otomatis muncul di `/blog`

### Unpublish/Draft:
1. Set `published: false` di front matter
2. Post tidak akan ditampilkan di halaman blog

---

## Tips Menulis Artikel yang Baik

### 1. Judul yang Menarik
- Gunakan angka (5 Tips, 10 Cara)
- Jelas dan deskriptif
- Maksimal 60 karakter untuk SEO

### 2. Excerpt yang Compelling
- Ringkas dan menarik (150-200 karakter)
- Jelaskan manfaat membaca artikel
- Hindari kalimat yang terpotong

### 3. Konten Berkualitas
- Minimal 500 kata
- Gunakan heading untuk struktur
- Tambahkan list/bullet points
- Sertakan gambar jika perlu
- Gunakan contoh konkret

### 4. Gambar Featured
- Ukuran minimal: 800x500px
- Gunakan gambar yang relevan
- Pastikan gambar berkualitas baik
- Gunakan alt text yang deskriptif

---

## Struktur Folder

```
travelbanyuwangi/
├── app/
│   └── blog/
│       ├── page.tsx           # Halaman listing blog
│       └── [slug]/
│           └── page.tsx       # Halaman detail artikel
├── lib/
│   └── blog.ts               # Helper functions untuk blog
└── content/
    ├── .gitkeep
    ├── example-post.md       # Contoh artikel
    ├── tips-travel.md        # Artikel Anda
    └── panduan-wali-5.md     # Artikel Anda
```

---

## Troubleshooting

### Post tidak muncul di blog?
- ✅ Pastikan `published: true`
- ✅ Cek format front matter (harus ada `---` pembuka dan penutup)
- ✅ Pastikan file berekstensi `.md`
- ✅ Cek tidak ada error di console

### Gambar tidak tampil?
- ✅ Pastikan URL gambar valid dan dapat diakses
- ✅ Gunakan HTTPS untuk URL gambar
- ✅ Cek format URL sudah benar

### Format tidak sesuai?
- ✅ Cek syntax Markdown
- ✅ Pastikan ada spasi setelah `#` untuk heading
- ✅ Gunakan baris kosong untuk memisahkan paragraf

---

## Contoh Cepat

Untuk membuat post baru dengan cepat:

1. Copy file `content/example-post.md`
2. Rename dengan slug yang diinginkan
3. Edit front matter
4. Tulis konten
5. Set `published: true`
6. Simpan dan cek di `/blog`

---

## Support

Jika ada pertanyaan atau masalah, silakan hubungi tim developer.

**Happy Blogging!** 📝
