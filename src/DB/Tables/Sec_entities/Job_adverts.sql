CREATE TABLE IF NOT EXISTS "job_adverts" (
	"job_advert_id" uuid DEFAULT uuid_generate_v4 (),
	"exp_date" DATE NOT NULL,
	"description" TEXT NOT NULL,
	"salary_min" INTEGER NOT NULL,
	"salary_max" INTEGER NOT NULL,
	"city" VARCHAR(40),
	"state" VARCHAR(2),
	"recruiter_id" uuid REFERENCES users("acc_id") NOT NULL,
	"company_id" uuid REFERENCES companies("company_id"),
	PRIMARY KEY ("job_advert_id")
);