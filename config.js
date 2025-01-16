var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "localhost",
	    user: "root",
	    password: "",
	    database: "whatsapp",
	    charset : "utf8mb4_general_ci",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 