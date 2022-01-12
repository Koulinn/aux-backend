CREATE TABLE IF NOT EXISTS "job_advert_education_types" (
	"job_advert_id" REFERENCES job_adverts("job_advert_id") NOT NULL,
	"education_type" REFERENCES education_types("education_type") NOT NULL,
	PRIMARY KEY ("job_advert_id", "education_type")
);