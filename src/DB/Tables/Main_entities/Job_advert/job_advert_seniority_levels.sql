CREATE TABLE IF NOT EXISTS "job_advert_seniority_levels" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id") NOT NULL,
	"seniority_level" seniorities NOT NULL,
	PRIMARY KEY ("job_advert_id", "seniority_level")
);