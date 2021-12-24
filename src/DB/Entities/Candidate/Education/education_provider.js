const education_provider = `
CREATE TABLE IF NOT EXISTS "education_provider" (
	    "_id" SERIAL,
	    "education_provider_name" VARCHAR(80) NOT NULL,
	    "address_id" REFERENCES address(_id),
	    "contact_id" REFERENCES contact(_id),
	    PRIMARY KEY ("_id")
    );
`
export default education_provider
