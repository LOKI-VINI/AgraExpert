// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pmypovfjoxrzzamnmdzx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBteXBvdmZqb3hyenphbW5tZHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzOTg3NDAsImV4cCI6MjA1ODk3NDc0MH0.hU6I95ZqVXld_rqZscBHvphQTBLM8IIOH8T34ItoBhQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);