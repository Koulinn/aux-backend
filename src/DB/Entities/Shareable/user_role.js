const user_role = `
CREATE TABLE IF NOT EXISTS "user_role" (
	    "_id" SERIAL,
	    "user_role" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default user_role
