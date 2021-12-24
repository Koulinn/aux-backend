const employee_range = `
CREATE TABLE IF NOT EXISTS "employee_range" (
	    "_id" SERIAL,
	    "employee_range" VARCHAR(80) NOT NULL,
	    PRIMARY KEY ("_id")
    );
`
export default employee_range
