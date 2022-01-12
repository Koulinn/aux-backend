CREATE TABLE IF NOT EXISTS "job_advert_job_title" (
	"job_advert_id" REFERENCES job_adverts("job_advert_id") NOT NULL,
	"job_title" REFERENCES job_titles("job_title") NOT NULL,
	PRIMARY KEY ("job_advert_id", "job_title")
);