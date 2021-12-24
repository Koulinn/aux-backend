const contact = `
CREATE TABLE IF NOT EXISTS "contact" (
	    "_id" SERIAL,
	    "phone_number_1" VARCHAR(16),
	    "phone_number_2" VARCHAR(16),
	    "email_1" VARCHAR(100) NOT NULL,
	    "email_2" VARCHAR(100),
	    "whatsapp" VARCHAR(16),
	    "telegram" VARCHAR(16),
	    "linkedin" VARCHAR(100),
	    "github" VARCHAR(100),
	    "personal_website" VARCHAR(255),
	    "personal_portfolio" VARCHAR(255),
	    PRIMARY KEY ("_id")
    );
`
export default contact
