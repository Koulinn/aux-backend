const company_culture = `
CREATE TABLE IF NOT EXISTS "company_culture" (
	    "_id" SERIAL,
	    "company_culture" VARCHAR(80) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default company_culture
