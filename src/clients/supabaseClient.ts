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

export async function getGames() {
  const res = await supabase.from<Game>("steam").select("*").limit(20);
  return res.data || [];
}
