import { createClient } from "@supabase/supabase-js";
import { Game } from "../interfaces/Game";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || "";
const supabaseAuthKey = process.env.REACT_APP_SUPABASE_AUTH_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  headers: {
    Authorization: `Bearer ${supabaseAuthKey}`
  }
});

export async function getGames(searchText?: string) {
  const query = supabase.from<Game>("steam").select("*").limit(20);
  if (searchText) {
    query.ilike("title", searchText + "%");
  }

  const res = await query;
  return res.data || [];
}
