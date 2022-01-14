CREATE TABLE IF NOT EXISTS "experiences" (
        "experience_id" uuid DEFAULT uuid_generate_v4 (),
        "company_name" VARCHAR(80) NOT NULL,
        "start_date" DATE,
        "end_date" DATE,
        "description" TEXT,
        "candidate_id" uuid REFERENCES accounts("acc_id") NOT NULL,
        "company_id" uuid REFERENCES companies("company_id"),
        "job_title" VARCHAR(40) REFERENCES job_titles(job_title) NOT NULL,
        "experience_type" VARCHAR(40) REFERENCES experience_types("experience_type"),
        PRIMARY KEY ("experience_id")
);