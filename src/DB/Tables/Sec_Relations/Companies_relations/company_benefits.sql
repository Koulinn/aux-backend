CREATE TABLE IF NOT EXISTS "company_benefit" (
    "company_id" uuid REFERENCES companies("company_id") ON DELETE CASCADE,
    "benefit" VARCHAR(40) REFERENCES benefits("benefit") NOT NULL,
    PRIMARY KEY ("company_id", "benefit")
);