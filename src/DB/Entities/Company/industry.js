const industry = `
CREATE TABLE IF NOT EXISTS "industry" (
	    "_id" SERIAL,
	    "industry" VARCHAR(80) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default industry
