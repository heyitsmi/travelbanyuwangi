// Bus Ticket Pricing Configuration
// Format harga dalam ribuan Rupiah (misal: 460 = Rp 460.000)

export interface BusTicketPrice {
  destination: string;
  executive?: number;
  vip?: number;
  sleeper?: number;
}

export interface BusSchedule {
  time: string;
  label: string;
  tickets: BusTicketPrice[];
}

// ===== PO. HANDOYO =====
export const HANDOYO_TICKETS: BusTicketPrice[] = [
  {
    destination: "Jakarta",
    executive: 460,
    vip: 420,
  },
  {
    destination: "Bogor",
    executive: 470,
    vip: 430,
  },
  {
    destination: "Merak",
    executive: 500,
    vip: 450,
  },
  {
    destination: "Lampung",
    executive: 750,
    vip: 670,
  },
  {
    destination: "Palembang",
    executive: 830,
    vip: 760,
  },
  {
    destination: "Bengkulu",
    executive: 960,
    vip: 875,
  },
  {
    destination: "Padang / Bukit Tinggi",
    executive: 1010,
    vip: 900,
  },
  {
    destination: "Jambi",
    executive: 860,
    vip: 790,
  },
  {
    destination: "Pekanbaru",
    executive: 1010,
    vip: 910,
  },
  {
    destination: "Ujung Batu",
    executive: 1050,
    vip: 950,
  },
];

// ===== PO. GUNUNG HARTA =====
export const GUNUNG_HARTA_SCHEDULES: BusSchedule[] = [
  {
    time: "08:00",
    label: "Jam 08:00 (Pagi)",
    tickets: [
      {
        destination: "Tangerang",
        executive: 480,
        sleeper: 660,
      },
      {
        destination: "Jakarta",
        executive: 470,
        sleeper: 640,
      },
      {
        destination: "Cikampek",
        executive: 450,
        sleeper: 620,
      },
      {
        destination: "Cirebon",
        executive: 420,
        sleeper: 600,
      },
    ],
  },
  {
    time: "09:30",
    label: "Jam 09:30 (Executive)",
    tickets: [
      {
        destination: "Bogor",
        executive: 480,
      },
      {
        destination: "Jakarta",
        executive: 470,
      },
      {
        destination: "Cikampek",
        executive: 450,
      },
      {
        destination: "Cirebon",
        executive: 420,
      },
    ],
  },
  {
    time: "10:00",
    label: "Jam 10:00 (Executive)",
    tickets: [
      {
        destination: "Bandung",
        executive: 470,
      },
      {
        destination: "Cirebon",
        executive: 420,
      },
    ],
  },
];

// Helper function to format price
export function formatBusPrice(priceInThousands: number): string {
  return `Rp ${priceInThousands.toLocaleString("id-ID")}.000`;
}

// Helper function to get all destinations from Handoyo
export function getHandoyoDestinations(): string[] {
  return HANDOYO_TICKETS.map((ticket) => ticket.destination);
}

// Helper function to get all destinations from Gunung Harta
export function getGunungHartaDestinations(): string[] {
  const destinations = new Set<string>();
  GUNUNG_HARTA_SCHEDULES.forEach((schedule) => {
    schedule.tickets.forEach((ticket) => {
      destinations.add(ticket.destination);
    });
  });
  return Array.from(destinations);
}

// Helper function to find ticket price
export function findHandoyoPrice(
  destination: string
): BusTicketPrice | undefined {
  return HANDOYO_TICKETS.find(
    (ticket) =>
      ticket.destination.toLowerCase() === destination.toLowerCase()
  );
}

// Helper function to find Gunung Harta ticket by destination and time
export function findGunungHartaPrice(
  destination: string,
  time?: string
): BusTicketPrice | undefined {
  for (const schedule of GUNUNG_HARTA_SCHEDULES) {
    if (time && schedule.time !== time) continue;
    const ticket = schedule.tickets.find(
      (t) => t.destination.toLowerCase() === destination.toLowerCase()
    );
    if (ticket) return ticket;
  }
  return undefined;
}
