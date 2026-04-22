import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    if (!id) {
      return NextResponse.json({ error: 'Missing booking ID' }, { status: 400 });
    }

    const data = await request.json();

    if (!supabase) {
      console.warn('Supabase is not configured! Skipping update.');
      return NextResponse.json({ success: true, message: 'Supabase not configured, bypassed.' });
    }

    // Create an update object with only provided fields to avoid overwriting with undefined
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.origin !== undefined) updateData.origin = data.origin;
    if (data.destination !== undefined) updateData.destination = data.destination;
    if (data.payment_method !== undefined) updateData.payment_method = data.payment_method;
    if (data.departure_date !== undefined) updateData.departure_date = data.departure_date;
    if (data.passengers !== undefined) updateData.passengers = parseInt(data.passengers);
    if (data.notes !== undefined) updateData.notes = data.notes;
    if (data.status !== undefined) updateData.status = data.status;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    const { data: updatedData, error } = await supabase
      .from('jt_leads')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating lead in Supabase:', error);
      return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: updatedData });

  } catch (error) {
    console.error('Failed to update lead:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    if (!id) {
      return NextResponse.json({ error: 'Missing booking ID' }, { status: 400 });
    }

    if (!supabase) {
      console.warn('Supabase is not configured! Skipping delete.');
      return NextResponse.json({ success: true, message: 'Supabase not configured, bypassed.' });
    }

    const { error } = await supabase
      .from('jt_leads')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting lead in Supabase:', error);
      return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Failed to delete lead:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
