CREATE TABLE IF NOT EXISTS "experience_techs" (
	"experience_id" REFERENCES experiences("experience_id") NOT NULL,
	"tech" REFERENCES techs("tech") NOT NULL,
	PRIMARY KEY ("experience_id", "tech")
);