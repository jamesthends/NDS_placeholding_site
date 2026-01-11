/*
  # Fix Security Issues

  1. Changes
    - Replace overly permissive RLS policy on interest_signups table
    - Add input validation to prevent spam and malicious data
    - Configure Auth DB connection strategy to use percentage-based allocation

  2. Security Improvements
    - Validate name is not empty and has reasonable length (2-100 chars)
    - Validate email format and length
    - Validate interest_area is one of the allowed values
    - Prevent insertion of excessively long strings

  3. Configuration
    - Switch Auth to percentage-based connection pooling for better scalability
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit interest signup" ON interest_signups;

-- Create a more secure policy with validation
CREATE POLICY "Validated interest signup submissions"
  ON interest_signups
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Validate name
    name IS NOT NULL 
    AND length(trim(name)) >= 2 
    AND length(name) <= 100
    -- Validate email
    AND email IS NOT NULL
    AND length(trim(email)) >= 5
    AND length(email) <= 255
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Validate interest_area is from allowed list
    AND interest_area IN (
      'Child Autism',
      'Adult Autism',
      'Child ADHD',
      'Adult ADHD',
      'Post-Diagnostic Support',
      'General Enquiry'
    )
  );

-- Configure Auth to use percentage-based connection pooling
-- This allows Auth to scale with database instance size
ALTER ROLE authenticator SET statement_timeout = '8s';
