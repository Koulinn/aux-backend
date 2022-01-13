CREATE TABLE IF NOT EXISTS "company_industries" (
    "company_id" uuid REFERENCES companies("company_id") ON DELETE CASCADE,
    "industry" VARCHAR(40) REFERENCES industries("industry"),
    PRIMARY KEY ("company_id", "industry")
);