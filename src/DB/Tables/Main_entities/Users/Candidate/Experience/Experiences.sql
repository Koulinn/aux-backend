CREATE TABLE IF NOT EXISTS "experiences" (
        "experience_id" uuid DEFAULT uuid_generate_v4 (),
        "candidate_id" uuid REFERENCES accounts("acc_id"),
        "experience_type" experience_type NOT NULL,
        "company_id" uuid REFERENCES companies("company_id"),
        "company_name" VARCHAR(80) NOT NULL,
        "start_date" DATE,
        "end_date" DATE,
        "job_title" VARCHAR(40) REFERENCES job_titles(job_title) NOT NULL,
        "description" TEXT,
        PRIMARY KEY ("experience_id")
);