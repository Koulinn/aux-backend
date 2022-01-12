CREATE TABLE IF NOT EXISTS "job_advert_location_types" (
	"job_advert_id" REFERENCES job_adverts("job_advert_id") NOT NULL,
	"location_type" REFERENCES location_types("location_type") NOT NULL,
	PRIMARY KEY ("job_advert_id", "location_type")
);