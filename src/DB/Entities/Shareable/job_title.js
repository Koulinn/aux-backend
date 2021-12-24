const job_title = `
CREATE TABLE IF NOT EXISTS "job_title" (
	    "_id" SERIAL,
	    "job_title" VARCHAR(50) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default job_title
