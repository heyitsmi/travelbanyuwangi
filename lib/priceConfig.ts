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
  "Batu",
  "Denpasar",
  "Bandara Ngurah Rai",
  "Jember",
  "Lumajang",
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
  "Banyuwangi-Bandara Juanda": 200000,
  "Banyuwangi-Tanjung Perak": 200000,
  "Banyuwangi-Malang": 200000,
  "Banyuwangi-Batu": 250000,
  "Banyuwangi-Denpasar": 200000,
  "Banyuwangi-Bandara Ngurah Rai": 200000,
  "Banyuwangi-Jember": 150000,
  "Banyuwangi-Lumajang": 170000,
  "Banyuwangi-Probolinggo": 200000,
  "Banyuwangi-Pasuruan": 200000,
  "Banyuwangi-Sidoarjo": 200000,
  "Banyuwangi-Gresik": 350000,
  "Banyuwangi-Solo": 400000,
  "Banyuwangi-Tulungagung": 400000,

  // Ke Banyuwangi (rute pulang)
  "Surabaya-Banyuwangi": 200000,
  "Bandara Juanda-Banyuwangi": 200000,
  "Tanjung Perak-Banyuwangi": 200000,
  "Malang-Banyuwangi": 200000,
  "Batu-Banyuwangi": 250000,
  "Denpasar-Banyuwangi": 200000,
  "Bandara Ngurah Rai-Banyuwangi": 200000,
  "Jember-Banyuwangi": 150000,
  "Lumajang-Banyuwangi": 170000,  
  "Probolinggo-Banyuwangi": 200000,
  "Pasuruan-Banyuwangi": 200000,
  "Sidoarjo-Banyuwangi": 200000,
  "Gresik-Banyuwangi": 350000,
  "Solo-Banyuwangi": 400000,
  "Tulungagung-Banyuwangi": 400000,
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
