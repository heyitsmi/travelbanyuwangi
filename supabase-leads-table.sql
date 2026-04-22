CREATE TABLE IF NOT EXISTS jt_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    booking_code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    origin VARCHAR(255),
    destination VARCHAR(255),
    payment_method VARCHAR(100),
    source VARCHAR(255),
    departure_date DATE,
    passengers INTEGER DEFAULT 1,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Pastikan RLS diaktifkan
ALTER TABLE jt_leads ENABLE ROW LEVEL SECURITY;

-- Buat policy untuk mengizinkan insert dari public/anon
CREATE POLICY "Allow anonymous inserts" 
ON jt_leads FOR INSERT 
TO public 
WITH CHECK (true);

-- Buat policy untuk mengizinkan select dari public/anon (diperlukan untuk dashboard)
CREATE POLICY "Allow anonymous selects" 
ON jt_leads FOR SELECT 
TO public 
USING (true);

-- Buat policy untuk mengizinkan update dari public/anon (diperlukan untuk ubah status)
CREATE POLICY "Allow anonymous updates" 
ON jt_leads FOR UPDATE 
TO public 
USING (true);
