
const knex = require("knex") ({
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        database : "school",
        password : "Akash@123"
    }
})

knex.schema.hasTable("Teachers").then( exits => {
    if (!exits) {
        return knex.schema.createTable("Teachers",table => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("school_name").notNullable();
            table.string("subject")

        }).then(() => {
            console.log("Table create successfuly..")
        }).catch (()=> {
            console.log("Table does not create..")
        })
    }
})


module.exports = {knex}