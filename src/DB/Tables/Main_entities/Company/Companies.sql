CREATE TABLE IF NOT EXISTS "companies" (
	"company_id" uuid DEFAULT uuid_generate_v4 (),
	"acc_id" uuid REFERENCES accounts("acc_id"),
	"company_name" VARCHAR(100) NOT NULL,
	"employees_qty" INTEGER,
	"logo" VARCHAR(240),
	"about" TEXT,
	"city" VARCHAR(80),
	"post_code" VARCHAR(16),
	"country" VARCHAR(4),
	"state" CHAR(2),
	PRIMARY KEY ("company_id")
);