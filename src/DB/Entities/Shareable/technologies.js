const technology = `
CREATE TABLE IF NOT EXISTS "technology" (
	    "_id" SERIAL,
	    "technology_name" VARCHAR(50) NOT NULL,
	    "seniority_level_id" REFERENCES seniority_level(_id) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default technology
