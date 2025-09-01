import { createClient } from "@supabase/supabase-js";

// جلب القيم من environment variables

const SUPABASE_URL='https://grpnrdhrrjpnwmxsqyex.supabase.co'
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdycG5yZGhycmpwbndteHNxeWV4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjIwMzA2NiwiZXhwIjoyMDcxNzc5MDY2fQ.98bKoa-ljusTmwKc7OEhRGZ10ZLw-0mG07-005y1BjA'

// إنشاء كائن Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
