import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cguedtlcwpbxyvndlwgd.supabase.co";
const supabaseKey = "sb_publishable_0pVcoJJJD-4_w8b49LBUbQ_yGSjA157";

export const supabase = createClient(supabaseUrl, supabaseKey);