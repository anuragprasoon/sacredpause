// pages/api/booking.js (for Next.js) or equivalent endpoint

import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_DBURL!
const supabaseServiceKey = process.env.SUPABASE_APIKEY! // Use service role key for server-side operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            message: 'Only POST requests are allowed'
        });
    }
    
    try {
        const {
            name,
            phone,
            email,
            trip_name,
            plan,
            trip_starting_date,
            referral_code,
            booking_status = 'pending',
            payment_status = 'pending'
        } = req.body;
        
        // Validate required fields
        if (!name || !phone || !email || !plan || !trip_starting_date) {
            return res.status(400).json({
                error: 'Validation error',
                message: 'Missing required fields: name, phone, email, plan, trip_starting_date'
            });
        }
        
        // Additional validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Validation error',
                message: 'Invalid email format'
            });
        }
        
        // Check for duplicate bookings (same email and trip date)
        const { data: existingBooking, error: checkError } = await supabase
            .from('sacredpause_booking')
            .select('id')
            .eq('email', email.toLowerCase())
            .eq('trip_starting_date', trip_starting_date)
            .eq('booking_status', 'pending')
            .single();
        
        if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "no rows found"
            console.error('Error checking for duplicates:', checkError);
            return res.status(500).json({
                error: 'Database error',
                message: 'Failed to check for existing bookings'
            });
        }
        
        if (existingBooking) {
            return res.status(409).json({
                error: 'Duplicate booking',
                message: 'You already have a pending booking for this date. Please contact us if you need to modify your booking.'
            });
        }
        
        // Insert the booking into Supabase
        const { data: booking, error: insertError } = await supabase
            .from('sacredpause_booking')
            .insert([{
                name: name.trim(),
                phone: phone.trim(),
                email: email.toLowerCase().trim(),
                tripname: trip_name || 'Ladakh Yoga Retreat',
                plan,
                trip_starting_date,
                referral_code: referral_code?.trim() || null,
                booking_status,
                payment_status
            }])
            .select()
            .single();
        
        if (insertError) {
            console.error('Error inserting booking:', insertError);
            return res.status(500).json({
                error: 'Database error',
                message: 'Failed to create booking. Please try again.'
            });
        }
        
        // Optional: Send confirmation email
        // await sendConfirmationEmail(booking);
        
        // Optional: Send notification to admin
        // await sendAdminNotification(booking);
        
        console.log('Booking created successfully:', booking.id);
        
        return res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            id: booking.id,
            data: {
                id: booking.id,
            }
        });
        
    } catch (error) {
        console.error('Unexpected error in booking API:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: 'An unexpected error occurred. Please try again.'
        });
    }
}

