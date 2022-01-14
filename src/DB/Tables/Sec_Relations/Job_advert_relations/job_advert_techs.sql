CREATE TABLE IF NOT EXISTS "job_advert_techs" (
	"job_advert_id" uuid REFERENCES job_adverts("job_advert_id") NOT NULL,
	"tech" VARCHAR(40) REFERENCES techs("tech") NOT NULL,
	"seniority_level" VARCHAR(40) REFERENCES seniority_levels("seniority_level"),
	"required" BOOL NOT NULL DEFAULT false,
	PRIMARY KEY ("job_advert_id", "tech")
);