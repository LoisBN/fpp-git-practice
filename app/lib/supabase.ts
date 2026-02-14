import { createClient } from "@supabase/supabase-js";

// Supabase client setup
// These values come from your .env file
// For this exercise, the app works without real Supabase credentials.
// You'll connect to a real Supabase project in Chapter 3.

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
