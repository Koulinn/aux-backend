CREATE TABLE IF NOT EXISTS "job_advert_job_title" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id"),
	"job_title" VARCHAR(40) REFERENCES job_titles("job_title"),
	PRIMARY KEY ("job_advert_id", "job_title")
);