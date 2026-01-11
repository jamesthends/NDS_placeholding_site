/*
  # Create Interest Signups Table

  1. New Tables
    - `interest_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `name` (text) - Name of the person registering interest
      - `email` (text) - Email address for contact
      - `interest_area` (text) - Area of interest (Child Autism, Adult Autism, Child ADHD, Adult ADHD, Post-Diagnostic Support, General Enquiry)
      - `created_at` (timestamptz) - Timestamp of signup

  2. Security
    - Enable RLS on `interest_signups` table
    - Add policy for anonymous users to insert new signups (public form)
    - No read access for public users (admin only via service role)

  3. Notes
    - This table stores leads from the holding page signup form
    - Interest area helps categorize demand for different services
*/

CREATE TABLE IF NOT EXISTS interest_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  interest_area text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE interest_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit interest signup"
  ON interest_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);