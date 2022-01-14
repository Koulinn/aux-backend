CREATE TABLE IF NOT EXISTS "company_culture" (
    "company_id" uuid REFERENCES companies("company_id") ON DELETE CASCADE,
    "culture" VARCHAR(40) REFERENCES cultures("culture"),
    PRIMARY KEY ("company_id", "culture")
);