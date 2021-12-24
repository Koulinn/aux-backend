const candidate_job_location_type = `
CREATE TABLE IF NOT EXISTS "candidate_job_location_type" (
	    "_id" SERIAL,
	    "candidate_id" REFERENCES candidate(_id),
	    "job_location_type_id" REFERENCES job_location_type(_id),
	    PRIMARY KEY ("_id")
    );
`
export default candidate_job_location_type
