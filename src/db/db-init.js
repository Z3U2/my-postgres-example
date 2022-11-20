const fs = require("fs");
const path = require("path");
const {createPool} = require("./create-pool");

const pool = createPool();

const orderSql = fs.readFileSync(path.resolve(__dirname,"./sql/ORDER.sql")).toString()
const productSql = fs.readFileSync(path.resolve(__dirname,"./sql/PRODUCT.sql")).toString()
const orderItemSql = fs.readFileSync(path.resolve(__dirname,"./sql/ORDER_ITEM.sql")).toString()

const seedDb = async() => {
    console.log("adding orders...")
    await pool.query(orderSql)
    console.log("adding products...")
    await pool.query(productSql)
    console.log("adding order items...")
    await pool.query(orderItemSql)
}

seedDb().catch(console.error)