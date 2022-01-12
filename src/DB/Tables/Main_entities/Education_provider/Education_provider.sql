CREATE TABLE IF NOT EXISTS "education_providers" (
	"education_provider_id" uuid DEFAULT uuid_generate_v4 (),
	"acc_id" uuid REFERENCES accounts("acc_id"),
	"education_provider_name" VARCHAR(144),
	"logo" VARCHAR(144),
	"country" VARCHAR(40),
	PRIMARY KEY ("education_provider_id")
);