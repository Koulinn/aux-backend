CREATE TABLE IF NOT EXISTS "job_advert_techs" (
	"job_advert_id" REFERENCES job_adverts("job_advert_id") NOT NULL,
	"tech" REFERENCES techs("tech") NOT NULL,
	"seniority_level" seniorities NOT NULL,
	"required" BOOL NOT NULL DEFAULT false,
	PRIMARY KEY ("job_advert_id", "tech")
);