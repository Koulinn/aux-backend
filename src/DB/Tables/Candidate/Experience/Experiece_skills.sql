CREATE TABLE IF NOT EXISTS "experience_skills" (
    "experience_id" REFERENCES experiences("experience_id") NOT NULL,
    "skill" REFERENCES skills("skill") NOT NULL,
    PRIMARY KEY ("experience_id", "skill")
);