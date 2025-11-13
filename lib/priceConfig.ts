// Config Harga Travel Antar Kota
// Format: "Kota Asal-Kota Tujuan": harga

export interface RoutePrice {
  from: string;
  to: string;
  price: number;
  description?: string;
}

export const CITIES = [
  "Banyuwangi",
  "Surabaya",
  "Bandara Juanda",
  "Tanjung Perak",
  "Malang",
  "Denpasar",
  "Bandara Ngurah Rai",
  "Jember",
  "Probolinggo",
  "Pasuruan",
  "Sidoarjo",
  "Gresik",
  "Solo",
  "Tulungagung",
] as const;

export type City = typeof CITIES[number];

// Database harga travel
// Key format: "KotaAsal-KotaTujuan"
export const PRICE_DATABASE: Record<string, number> = {
  // Dari Banyuwangi
  "Banyuwangi-Surabaya": 200000,
  "Banyuwangi-Bandara Juanda": 250000,
  "Banyuwangi-Tanjung Perak": 230000,
  "Banyuwangi-Malang": 200000,
  "Banyuwangi-Denpasar": 200000,
  "Banyuwangi-Bandara Ngurah Rai": 250000,
  "Banyuwangi-Jember": 100000,
  "Banyuwangi-Probolinggo": 150000,
  "Banyuwangi-Pasuruan": 170000,
  "Banyuwangi-Sidoarjo": 180000,
  "Banyuwangi-Gresik": 350000,
  "Banyuwangi-Solo": 300000,
  "Banyuwangi-Tulungagung": 180000,

  // Ke Banyuwangi (rute pulang)
  "Surabaya-Banyuwangi": 200000,
  "Bandara Juanda-Banyuwangi": 250000,
  "Tanjung Perak-Banyuwangi": 230000,
  "Malang-Banyuwangi": 200000,
  "Denpasar-Banyuwangi": 200000,
  "Bandara Ngurah Rai-Banyuwangi": 250000,
  "Jember-Banyuwangi": 100000,
  "Probolinggo-Banyuwangi": 150000,
  "Pasuruan-Banyuwangi": 170000,
  "Sidoarjo-Banyuwangi": 180000,
  "Gresik-Banyuwangi": 350000,
  "Solo-Banyuwangi": 300000,
  "Tulungagung-Banyuwangi": 180000,

  // Antar kota lainnya (opsional)
  "Surabaya-Malang": 180000,
  "Malang-Surabaya": 180000,
  "Surabaya-Denpasar": 300000,
  "Denpasar-Surabaya": 300000,
  "Malang-Denpasar": 300000,
  "Denpasar-Malang": 300000,
};

// Fungsi untuk mendapatkan harga
export function getPrice(from: string, to: string): number | null {
  const key = `${from}-${to}`;
  return PRICE_DATABASE[key] || null;
}

// Fungsi untuk format harga ke Rupiah
export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")},-`;
}

// Fungsi untuk mendapatkan semua rute yang tersedia
export function getAllRoutes(): RoutePrice[] {
  return Object.entries(PRICE_DATABASE).map(([key, price]) => {
    const [from, to] = key.split("-");
    return {
      from,
      to,
      price,
    };
  });
}

// Fungsi untuk mencari rute berdasarkan kota asal
export function getRoutesByOrigin(origin: string): RoutePrice[] {
  return getAllRoutes().filter((route) => route.from === origin);
}

// Fungsi untuk mencari rute berdasarkan kota tujuan
export function getRoutesByDestination(destination: string): RoutePrice[] {
  return getAllRoutes().filter((route) => route.to === destination);
}
