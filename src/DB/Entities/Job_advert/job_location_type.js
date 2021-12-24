const job_location_type = `
CREATE TABLE IF NOT EXISTS "job_location_type" (
	    "_id" SERIAL,
	    "job_location_type" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default job_location_type
