const company_benefits = `
CREATE TABLE IF NOT EXISTS "company_benefits" (
	    "_id" SERIAL,
	    "company_benefits" VARCHAR(80) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default company_benefits
