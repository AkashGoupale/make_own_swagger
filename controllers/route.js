
const {knex} = require("../connection/db") 


const get_data = async(req,res) =>  {
    try {

        let data = await knex("Teachers")
        if (data.length > 0) {
            console.log(data)
            res.send({status:"successful" , data :data })
        }
        else {
            res.send("data does not found..")
        }
    }
    catch {
        res.send("error found..")
    }
}

const get_data_by_id = async(req,res) => {
    try {
        data = await knex("Teachers").where({id:req.params.id})
        if (data.length > 0) {
            res.send({status:"successful",data:data})
        }
        else {
            res.send("data does not found..")
        }
    }
    catch {
        res.send("error found...")
    }
}

const data_insert = async (req,res) => {
    try {
        const {name , school_name , subject} = req.body
        data = await knex("Teachers").insert(req.body)  
        if (data.length > 0) {
            res.send({status : "successful" , data :data , })
        }
        else {
            res.send("something went wrong..")
        }
    }
    catch (err) {
        res.send({error:err})
    }
}

const delete_data = async (req,res) => {
    try {
        data = await knex("Teachers").where({id:req.params.id}).del()
        if (data  > 0){
            res.send({status:"successful" , data : data})
        }
        else {
            res.send("id does not found..")
        }
    }
    catch (err) {
        res.send({massage:err.massage})
    }
}


const update_data = async(req,res) => {
    try {

        data = await knex("Teachers").where({id:req.params.id}).update(req.body)
        if (data > 0 ) {
            res.send({status:"successful" , data : data})
        }
        else {
            res.send({status:"fail" , massage :"This id does not found.."})
        }
     }
     catch {
        res.send("something went wrong..")
     }
}


module.exports = {get_data, get_data_by_id , data_insert , delete_data , update_data}
