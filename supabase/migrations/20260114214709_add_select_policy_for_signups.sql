/*
  # Add SELECT Policy for Interest Signups

  1. Changes
    - Add SELECT policy to allow reading interest_signups data
    - This enables the admin dashboard to display submissions

  2. Security Notes
    - The current admin dashboard uses client-side password protection
    - This policy allows the anon role to read data, which works with the current setup
    - For production use, consider implementing proper Supabase Auth or using an Edge Function with service role
*/

-- Add policy to allow reading signups
CREATE POLICY "Allow reading interest signups"
  ON interest_signups
  FOR SELECT
  TO anon
  USING (true);
