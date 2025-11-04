import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Travel Banyuwangi - Juragan Travel';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 120px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 40,
            background: 'linear-gradient(45deg, #ffffff, #f1f5f9)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          JURAGAN TRAVEL
        </div>
        <div
          style={{
            fontSize: 36,
            marginBottom: 30,
            opacity: 0.9,
            lineHeight: 1.4,
          }}
        >
          Travel Banyuwangi - Surabaya, Malang, Denpasar
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.8,
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          Layanan travel antar kota aman & nyaman
          <br />
          Berangkat setiap hari • Door to door
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          juragantravel.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}