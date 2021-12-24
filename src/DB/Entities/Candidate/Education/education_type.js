const education_type = `
CREATE TABLE IF NOT EXISTS "education_type" (
	    "_id" SERIAL,
	    "education_type" VARCHAR(50) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default education_type
