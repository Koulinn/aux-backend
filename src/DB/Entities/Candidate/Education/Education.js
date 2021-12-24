const education = `
CREATE TABLE IF NOT EXISTS "education" (
	    "_id" uuid DEFAULT uuid_generate_v4 (),
	    "education_title" VARCHAR(80) NOT NULL,
	    "description" TEXT,
	    "start_date" DATE NOT NULL,
	    "end_date" DATE,
	    "education_type_id" REFERENCES education_type(_id),
	    "candidate_id" REFERENCES candidate(_id),
	    "education_provider_id" REFERENCES education_provider(_id),
	    PRIMARY KEY ("_id")
    );
`
export default education
