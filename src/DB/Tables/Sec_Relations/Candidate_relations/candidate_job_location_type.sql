CREATE TABLE IF NOT EXISTS "candidate_job_location_type" (
	"candidate_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
	"location_type" VARCHAR(40) REFERENCES location_types("location_type") NOT NULL,
	PRIMARY KEY ("candidate_id", "location_type")
);