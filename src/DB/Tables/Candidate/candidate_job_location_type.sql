CREATE TABLE IF NOT EXISTS "candidate_job_location_type" (
	"acc_id" uuid REFERENCES users("acc_id") ON DELETE CASCADE,
	"location_type" REFERENCES location_types("location_type") NOT NULL,
	PRIMARY KEY ("acc_id", "location_type")
);