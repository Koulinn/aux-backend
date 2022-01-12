CREATE TABLE IF NOT EXISTS "applications" (
	"job_advert_id" REFERENCES job_adverts("job_advert_id"),
	"candidate_id" REFERENCES users("acc_id") NOT NULL,
	"application_status" application_status NOT NULL,
	PRIMARY KEY ("job_advert_id", "acc_id")
);