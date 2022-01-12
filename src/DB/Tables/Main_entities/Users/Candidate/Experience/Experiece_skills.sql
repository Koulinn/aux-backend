CREATE TABLE IF NOT EXISTS "experience_skills" (
    "experience_id" uuid REFERENCES experiences("experience_id"),
    "skill" VARCHAR(40) REFERENCES skills("skill"),
    PRIMARY KEY ("experience_id", "skill")
);