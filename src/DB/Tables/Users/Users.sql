CREATE TABLE IF NOT EXISTS "users" (
	"acc_id" uuid REFERENCES accounts("acc_id") ON DELETE CASCADE,
	"first_name" VARCHAR(100) NOT NULL,
	"middle_name" VARCHAR(100) NOT NULL,
	"last_name" VARCHAR(100) NOT NULL,
	"about" TEXT,
	"avatar" VARCHAR(240),
	"gender" REFERENCES genders("gender"),
	"sexual_identity" REFERENCES sexual_identities("sexual_identity"),
	"ethnic" REFERENCES ethnics("ethnic"),
	"current_company_id" REFERENCES companies("acc_id"),
	PRIMARY KEY ("acc_id")
);