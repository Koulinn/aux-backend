const skills = `
CREATE TABLE IF NOT EXISTS "skills" (
	    "_id" SERIAL,
	    "skills_name" VARCHAR(50) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default skills
