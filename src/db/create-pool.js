function createPool() {
    const { Pool } = require('pg');
    const { dbConfig } = require("./db-config");

    const pool = new Pool(dbConfig);
    return pool;
}
exports.createPool = createPool;
