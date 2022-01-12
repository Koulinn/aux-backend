CREATE TABLE IF NOT EXISTS "candidate_techs" (
	"acc_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
	"tech" REFERENCES techs("tech") NOT NULL,
	"seniority" seniorities,
	PRIMARY KEY ("acc_id", "tech")
);