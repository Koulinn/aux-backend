CREATE TABLE IF NOT EXISTS "candidate_educations" (
    "candidate_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
    "candidate_education_id" uuid DEFAULT uuid_generate_v4 (),
    "education_title" VARCHAR(80) NOT NULL,
    "description" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "grade" REAL CHECK (
        grade BETWEEN 0
        AND 10
    ),
    "link" VARCHAR(244),
    "education_type" VARCHAR(40) REFERENCES education_types("education_type") NOT NULL,
    "education_provider_id" uuid REFERENCES education_providers("education_provider_id") NOT NULL,
    PRIMARY KEY ("candidate_id", "candidate_education_id")
);