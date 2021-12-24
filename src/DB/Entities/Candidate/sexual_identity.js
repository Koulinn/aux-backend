const sexual_identity = `
CREATE TABLE IF NOT EXISTS "sexual_identity" (
	    "_id" SERIAL,
	    "sexual_identity" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default sexual_identity
