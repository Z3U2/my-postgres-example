const { createPool } = require("./db/create-pool")

const pool = createPool()

const run = async () => {
    try {
        const res = await pool.query('SELECT SUM(price), COUNT(*) as nb_items FROM ORDER_ITEM NATURAL JOIN PRODUCT GROUP BY order_id')
        console.log(res)
    } catch (err) {
        console.error(err)
    }
    await pool.end()
}

run().catch(console.error)


