
const express = require("express")
const router = express()

const {get_data , get_data_by_id , data_insert , delete_data , update_data} = require("../controllers/route")

router.get("/All_data",get_data)

router.get("/get_data/:id",get_data_by_id)

router.post("/insert_data", data_insert)

router.put("/update_data/:id" , update_data)

router.delete("/delete_data/:id",delete_data)



module.exports = router