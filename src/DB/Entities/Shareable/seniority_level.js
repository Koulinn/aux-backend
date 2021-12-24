const seniority_level = `
CREATE TABLE IF NOT EXISTS "seniority_level" (
	    "_id" SERIAL,
	    "seniority_level" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default seniority_level
