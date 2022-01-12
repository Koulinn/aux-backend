CREATE TABLE IF NOT EXISTS "candidate_techs" (
	"candidate_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
	"tech" VARCHAR(40) REFERENCES techs("tech") NOT NULL,
	"seniority" seniorities,
	PRIMARY KEY ("candidate_id", "tech")
);