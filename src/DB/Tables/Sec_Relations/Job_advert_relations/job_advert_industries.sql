CREATE TABLE IF NOT EXISTS "job_advert_industries" (
    "job_advert_id" uuid REFERENCES job_adverts("job_advert_id") ON DELETE CASCADE,
    "industry" VARCHAR(40) REFERENCES industries("industry"),
    PRIMARY KEY ("job_advert_id", "industry")
);