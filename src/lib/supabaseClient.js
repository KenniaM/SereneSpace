import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vlhieehazxuuesgqhnog.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaGllZWhhenh1dWVzZ3Fobm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMjM3MzIsImV4cCI6MjAzNzc5OTczMn0.HtAKDCmKVE3DQn8akN-6YWWftwUIg-kS23bMzcSOOwU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
