const application_status = `
CREATE TABLE IF NOT EXISTS "application_status" (
	    "_id" SERIAL,
	    "application_status" VARCHAR(20) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default application_status
