CREATE TABLE IF NOT EXISTS "job_advert_education_types" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id"),
	"education_type" VARCHAR(40) REFERENCES education_types("education_type"),
	PRIMARY KEY ("job_advert_id", "education_type")
);