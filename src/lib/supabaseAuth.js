import { supabase } from "../lib/supabaseClient";

export const createUser = async (email, password) => {
      const result = await supabase.auth.signUp({ email, password });
      return result;
  };
  export const signInWithEmail = async (email, password) => {
      const result = await supabase.auth.signInWithPassword({ email, password });
      return result;

  };