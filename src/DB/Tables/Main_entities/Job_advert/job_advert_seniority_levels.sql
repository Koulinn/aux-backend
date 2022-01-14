CREATE TABLE IF NOT EXISTS "job_advert_seniority_levels" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id"),
	"seniority_level" VARCHAR(40) REFERENCES seniority_levels("seniority_level"),
	PRIMARY KEY ("job_advert_id", "seniority_level")
);