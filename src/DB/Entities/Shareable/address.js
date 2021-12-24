const address = `
CREATE TABLE IF NOT EXISTS "address" (
	    "_id" SERIAL,
	    "street" VARCHAR(80),
	    "city" VARCHAR(50),
	    "state" VARCHAR(50),
	    "bairro" VARCHAR(50),
	    "CEP" VARCHAR(20),
	    "number" SMALLINTEGER,
	    PRIMARY KEY ("_id")
    );
`
export default address
