import { createClient } from '@supabase/supabase-js';

// Get the URL and anon key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single Supabase client for use in the app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
