CREATE TYPE experience_type AS ENUM ('work', 'freelance', 'volunteer', 'hobbie');

CREATE TYPE account_type AS ENUM ('candidate', 'recruiter', 'company', 'admin');

CREATE TYPE seniorities AS ENUM (
    'basic',
    'beginner',
    'intermediate',
    'advanced',
    'expert'
);

CREATE TYPE application_status AS ENUM (
    'applied',
    'refused',
    'accepted',
    'reviewing',
    'hr_interview',
    'tech_interview',
    'tech_task',
    'offer'
);