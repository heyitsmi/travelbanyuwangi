import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, origin, destination, payment_method, source, date, passengers, notes } = data;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing name or phone' }, { status: 400 });
    }

    if (!supabase) {
      console.warn('Supabase is not configured! Skipping insert.');
      return NextResponse.json({ success: true, message: 'Supabase not configured, bypassed.' });
    }

    // Generate a simple booking code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `JT-${randomNum}`;

    const { data: insertedData, error } = await supabase
      .from('jt_leads')
      .insert([
        {
          booking_code: bookingCode,
          name,
          phone,
          origin: origin || null,
          destination: destination || null,
          payment_method: payment_method || null,
          source: source || null,
          departure_date: date || null,
          passengers: parseInt(passengers) || 1,
          notes: notes || null,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error inserting lead to Supabase:', error);
      return NextResponse.json({ error: 'Failed to insert lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: insertedData });

  } catch (error) {
    console.error('Failed to process lead:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
