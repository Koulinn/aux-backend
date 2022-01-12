CREATE TABLE IF NOT EXISTS "job_advert_skills_required" (
	"job_advert_id" REFERENCES job_adverts("job_advert_id") NOT NULL,
	"skill" REFERENCES skills("skill") NOT NULL,
	"seniority_level" seniorities NOT NULL,
	PRIMARY KEY ("job_advert_id", "skill")
);