CREATE TABLE IF NOT EXISTS "job_adverts" (
	"job_advert_id" uuid DEFAULT UNIQUE uuid_generate_v4 (),
	"acc_id" REFERENCES users("acc_id") NOT NULL,
	"exp_date" DATE NOT NULL,
	"description" TEXT NOT NULL,
	"company_id" REFERENCES companies("company_id"),
	"city" VARCHAR(40),
	"state" VARCHAR(2),
	PRIMARY KEY ("job_advert_id", "recruiter_id")
);

s