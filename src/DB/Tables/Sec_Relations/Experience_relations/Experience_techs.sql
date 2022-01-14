CREATE TABLE IF NOT EXISTS "experience_techs" (
	"experience_id" uuid REFERENCES experiences("experience_id"),
	"tech" VARCHAR(40) REFERENCES techs("tech") NOT NULL,
	PRIMARY KEY ("experience_id", "tech")
);