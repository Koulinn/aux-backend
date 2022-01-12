CREATE TABLE IF NOT EXISTS "job_advert_location_types" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id"),
	"location_type" VARCHAR(40) REFERENCES location_types("location_type"),
	PRIMARY KEY ("job_advert_id", "location_type")
);