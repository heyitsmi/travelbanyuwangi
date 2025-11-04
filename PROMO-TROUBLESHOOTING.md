# Troubleshooting Halaman Promo

## ✅ Masalah: Error 404 pada `/promo/[slug]`

### Penyebab
1. Next.js 15+ menggunakan async params untuk dynamic routes
2. Development server perlu restart setelah menambah file markdown baru
3. Cache Next.js (.next folder) mungkin outdated

### Solusi yang Sudah Diterapkan

#### 1. Update Interface Params menjadi Promise
```typescript
interface PromoPageProps {
  params: Promise<{
    slug: string;
  }>;
}
```

#### 2. Await Params di Fungsi
```typescript
export async function generateMetadata({ params }: PromoPageProps) {
  const { slug } = await params;
  // ... rest of code
}

export default async function PromoDetailPage({ params }: PromoPageProps) {
  const { slug } = await params;
  // ... rest of code
}
```

#### 3. Tambahkan dynamicParams Configuration
```typescript
export const dynamicParams = false; // Return 404 for unknown slugs
```

### Cara Restart Development Server

#### Option 1: Kill dan Restart (Recommended)
```bash
# Windows (PowerShell/CMD)
taskkill /F /PID <process_id>
cd c:\laragon\www\travelbanyuwangi
rm -rf .next
npm run dev

# Linux/Mac
kill -9 <process_id>
cd /path/to/travelbanyuwangi
rm -rf .next
npm run dev
```

#### Option 2: Restart Sederhana
```bash
# Tekan Ctrl+C di terminal yang menjalankan npm run dev
# Kemudian jalankan lagi:
npm run dev
```

### Verifikasi Halaman Promo

1. **Halaman List Promo**: http://localhost:3000/promo
   - Harus menampilkan 3 promo card
   - Setiap card punya link ke detail

2. **Halaman Detail Promo**:
   - http://localhost:3000/promo/diskon-surabaya
   - http://localhost:3000/promo/gratis-spanduk-wali
   - http://localhost:3000/promo/grup-gratis-1

### Checklist Jika Masih Error 404

- [ ] Pastikan file markdown ada di `content/promo/*.md`
- [ ] Pastikan frontmatter lengkap dan valid
- [ ] Pastikan `active: true` di frontmatter
- [ ] Pastikan `validUntil` masih di masa depan
- [ ] Hapus folder `.next` untuk clear cache
- [ ] Restart development server
- [ ] Periksa console untuk error
- [ ] Pastikan slug URL sesuai dengan nama file (tanpa .md)

### Common Errors

#### Error: "Property 'slug' does not exist on type 'Promise'"
✅ **Fixed**: Params sudah di-await

#### Error: "Cannot read properties of null"
Penyebab: File markdown tidak ditemukan
Solusi: Periksa nama file dan slug URL

#### Error: "Failed to parse frontmatter"
Penyebab: Format YAML frontmatter salah
Solusi: Pastikan format sesuai template:
```markdown
---
title: "Judul"
description: "Deskripsi"
category: "Kategori"
image: "/path/to/image.webp"
active: true
validUntil: "2025-12-31"
promoCode: "KODE"
---
```

### Development Ports

- Primary: http://localhost:3000
- Alternative (jika 3000 terpakai): http://localhost:3001

### Testing Commands

```bash
# Test halaman list promo
curl http://localhost:3000/promo

# Test halaman detail promo
curl http://localhost:3000/promo/diskon-surabaya

# Check if files exist
ls -la content/promo/

# Check promo library
node -e "const { getAllPromos } = require('./lib/promo.ts'); console.log(getAllPromos());"
```

## Status Update

### ✅ Yang Sudah Diperbaiki (4 Nov 2025):
1. Interface params diubah menjadi Promise
2. Semua fungsi yang menggunakan params sudah di-await
3. Dynamic params configuration ditambahkan
4. File markdown path gambar diupdate ke gambar yang tersedia
5. Development server sudah direstart
6. Cache Next.js sudah dibersihkan

### 🎯 Halaman Sekarang Berfungsi:
- `/promo` - List semua promo ✅
- `/promo/diskon-surabaya` - Detail promo ✅
- `/promo/gratis-spanduk-wali` - Detail promo ✅
- `/promo/grup-gratis-1` - Detail promo ✅

## Next Steps

1. Tambahkan gambar promo yang proper di `/public/img/promo/`
2. Test di production build: `npm run build && npm start`
3. Deploy ke hosting
