import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
};

export const supabase = {
  auth: {
    signInWithPassword: async (credentials: { email: string; password: string }) => {
      const client = getSupabase();
      if (!client) {
        return { data: null, error: { message: 'Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.' } };
      }
      return client.auth.signInWithPassword(credentials);
    },
    signUp: async (credentials: { email: string; password: string }) => {
      const client = getSupabase();
      if (!client) {
        return { data: null, error: { message: 'Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.' } };
      }
      return client.auth.signUp(credentials);
    },
    signOut: async () => {
      const client = getSupabase();
      if (!client) {
        return { error: { message: 'Supabase not configured.' } };
      }
      return client.auth.signOut();
    }
  }
};
