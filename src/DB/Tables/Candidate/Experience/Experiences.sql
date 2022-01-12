CREATE TABLE IF NOT EXISTS "experiences" (
        "experience_id" uuid DEFAULT UNIQUE uuid_generate_v4 (),
        "experience_type" experience_type NOT NULL,
        "company_id" uuid REFERENCES accounts("acc_id"),
        "company_name" VARCHAR(80) NOT NULL,
        "start_date" DATE,
        "end_date" DATE,
        "job_title" REFERENCES job_titles(job_title) NOT NULL,
        "description" TEXT,
        PRIMARY KEY ("experience_id")
);