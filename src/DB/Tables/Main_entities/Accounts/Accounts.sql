CREATE TABLE IF NOT EXISTS "accounts" (
    "acc_id" uuid DEFAULT uuid_generate_v4 (),
    "account_type" VARCHAR(40) REFERENCES account_types("account_type") NOT NULL,
    "password" VARCHAR(80),
    "accepted_terms" BOOL NOT NULL,
    "email_primary" VARCHAR(80) UNIQUE NOT NULL,
    "email_secondary" VARCHAR(80),
    "google_id" VARCHAR(80) UNIQUE,
    "linkedin_id" VARCHAR(80) UNIQUE,
    "github_id" VARCHAR(80) UNIQUE,
    "phone_number_primary" VARCHAR(20) UNIQUE,
    "phone_number_secondary" VARCHAR(20),
    "refresh_token" VARCHAR(255) UNIQUE,
    "CEP" VARCHAR(16),
    "state" CHAR(2),
    "city" VARCHAR(80),
    PRIMARY KEY ("acc_id")
);