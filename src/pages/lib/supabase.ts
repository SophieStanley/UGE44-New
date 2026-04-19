import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_ANON_KEY);

interface Thought {
  id: number;
  message: string;
  approved: boolean;
  created_at: string;
  display_name: string | null;
  theme: string | null;
}
