CREATE TABLE IF NOT EXISTS "applications" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id"),
	"candidate_id" uuid REFERENCES users("acc_id"),
	"application_status" VARCHAR(40) REFERENCES application_statuses("application_status") NOT NULL,
	PRIMARY KEY ("job_advert_id", "candidate_id")
);