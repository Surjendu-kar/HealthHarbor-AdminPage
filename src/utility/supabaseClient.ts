import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://eraerhfcolqnyopznyyb.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyYWVyaGZjb2xxbnlvcHpueXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1Nzk2MDMsImV4cCI6MjAyMTE1NTYwM30.g4LZvhcHgiFj2h_xh20g-nu6xO90-4Jl4YXkhzki4dc";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
