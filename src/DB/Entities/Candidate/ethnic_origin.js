const ethnic_origin = `
CREATE TABLE IF NOT EXISTS "ethnic_origin" (
	    "_id" SERIAL,
	    "ethnic_origin" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default ethnic_origin
