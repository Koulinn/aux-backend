CREATE TABLE IF NOT EXISTS "candidate_skills" (
	"candidate_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
	"skill" VARCHAR(40) REFERENCES skills("skill") NOT NULL,
	"seniority" seniorities,
	PRIMARY KEY ("candidate_id", "skill")
);