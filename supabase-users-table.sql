-- ================================================
-- JuraganTravel: jt_users table
-- Manual Auth (no Supabase Auth)
-- ================================================

CREATE TABLE IF NOT EXISTS public.jt_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.jt_users ENABLE ROW LEVEL SECURITY;

-- Allow server-side API (service_role) full access
-- Public cannot read/write user records

-- ================================================
-- SEEDER: Default Admin Account
-- Email: admin@juragantravel.com
-- Password: password123
-- (bcrypt hash generated with saltRounds=10)
-- ================================================
INSERT INTO public.jt_users (email, password_hash, name, role)
VALUES (
  'admin@juragantravel.com',
  '$2b$10$kFN0ptZVveQhWv8YJHJrqubjaGXuiAG3bRJg5BWJhI2D8nPhHD8.y',
  'Admin JuraganTravel',
  'super_admin'
)
ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash;
