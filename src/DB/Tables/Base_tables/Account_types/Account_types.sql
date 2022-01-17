CREATE TABLE IF NOT EXISTS "account_types" (
    "account_type" VARCHAR(40),
    PRIMARY KEY ("account_type")
);

INSERT INTO
    account_types(account_type)
VALUES
    ('admin'),
    ('candidate'),
    ('recruiter'),
    ('company'),
    ('education_provider') ON CONFLICT DO NOTHING;