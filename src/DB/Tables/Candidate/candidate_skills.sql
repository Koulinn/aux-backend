CREATE TABLE IF NOT EXISTS "candidate_skills" (
	"acc_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
	"skill" REFERENCES skills("skill") NOT NULL,
	"seniority" seniorities,
	PRIMARY KEY ("acc_id", "skill")
);