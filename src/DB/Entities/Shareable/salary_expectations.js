const salary_expectations = `
CREATE TABLE IF NOT EXISTS "salary_expectations" (
	    "_id" SERIAL,
	    "salary_expectations" VARCHAR(16) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default salary_expectations
