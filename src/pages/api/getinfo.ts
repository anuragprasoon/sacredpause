// pages/api/getinfo.js
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_DBURL!
const supabaseServiceKey = process.env.SUPABASE_APIKEY! // Use service role key for server-side operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Allow both GET and POST methods
    if (req.method !== 'GET' && req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            message: 'Only GET and POST requests are allowed'
        });
    }

    // Get slug from query params (GET) or body (POST)
    const slug = req.method === 'GET' ? req.query.slug : req.body?.slug;

    let query = supabase.from('sacredpause_retreat').select('*').eq('slug', slug);

    const { data, error } = await query;

    if (error) {
            console.error('Database error:', error);
            
            // Handle case where no retreat found with given slug
            if (error.code === 'PGRST116') {
                return res.status(404).json({
                    error: 'Not found',
                    message: slug ? `Retreat with slug "${slug}" not found` : 'No retreats found'
                });
            }
            
            return res.status(500).json({
                error: 'Database error',
                message: 'Failed to fetch retreat data'
            });
        }
        
        // Process the data to ensure JSON fields are properly parse
        
        return res.status(200).json({
            success: true,
            data: data
        });
        
}
