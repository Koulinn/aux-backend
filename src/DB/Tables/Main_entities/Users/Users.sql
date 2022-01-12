CREATE TABLE IF NOT EXISTS "users" (
	"acc_id" uuid REFERENCES accounts("acc_id") ON DELETE CASCADE,
	"first_name" VARCHAR(40) NOT NULL,
	"middle_name" VARCHAR(40) NOT NULL,
	"last_name" VARCHAR(40) NOT NULL,
	"about" TEXT,
	"avatar" VARCHAR(240),
	"salary_min" INTEGER,
	"salary_max" INTEGER,
	"gender" VARCHAR(40) REFERENCES genders("gender"),
	"sexual_identity" VARCHAR(40) REFERENCES sexual_identities("sexual_identity"),
	"ethnic" VARCHAR(40) REFERENCES ethnics("ethnic"),
	"current_company_id" uuid REFERENCES companies("company_id"),
	PRIMARY KEY ("acc_id")
);