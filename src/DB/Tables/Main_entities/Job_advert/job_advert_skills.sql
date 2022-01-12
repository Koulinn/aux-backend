CREATE TABLE IF NOT EXISTS "job_advert_skills" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id"),
	"skill" VARCHAR(40) REFERENCES skills("skill") NOT NULL,
	"seniority_level" seniorities NOT NULL,
	"required" BOOL NOT NULL DEFAULT false,
	PRIMARY KEY ("job_advert_id", "skill")
);