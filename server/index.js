const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const crypto = require("crypto")
const { error } = require("console")
const { request } = require("http")

var storeex = express()
storeex.use(cors())
storeex.use(bodyparser.json())
storeex.use(express.json())
storeex.use(bodyparser.urlencoded({ extended: true }))
storeex.use(express.static('public'))

let localdb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P@ssw0rd",
    database: "practise"
})

localdb.connect((error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("DB Connected")
    }
})

storeex.get('/getoneservice/:sno', (request, response) => {
    let { sno } = request.params
    let getonequerry = 'select * from services where sno=?'
    localdb.query(getonequerry, [sno], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send(result)
        }
    })
})

storeex.get('/getoneuser/:id', (request, response) => {
    let { id } = request.params
    let getonequerry = 'select * from register where id=?'
    localdb.query(getonequerry, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send(result)
        }
    })
})

storeex.get('/getall', (request, response) => {
    let selectquery = 'select * from register'
    localdb.query(selectquery, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getallservice', (request, response) => {
    let selectquery = 'select * from services'
    localdb.query(selectquery, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getbooking', (request, response) => {
    let selectquery = 'select * from booking'
    localdb.query(selectquery, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
            console.log(result)
        }
    })
})

storeex.post('/addservice', (request, response) => {
    var sno = crypto.randomUUID();
    var datetime = new Date();
    var createdDate = datetime.toISOString().slice(0, 10)
    console.log(createdDate);

    let { servicename, servicecost, benifits } = request.body
    let inserquery = `insert into practise.services (sno,servicename,servicecost,benifits,createdby,updatedby,createddate,updateddate) 
    values('${sno}',?,?,?,'${sno} ','${sno} ','${createdDate} ','${createdDate} ')`

    localdb.query(inserquery, [servicename, servicecost, benifits], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

storeex.post('/register', (request, response) => {
    var id = crypto.randomUUID();
    var datetime = new Date();
    var createdDate = datetime.toISOString().slice(0, 10)
    console.log(createdDate);

    let { fname, lname, email, password, location, age, phone } = request.body
    let inserquery = `insert into practise.register (id,fname,lname,email,password,location,age,phone,username,created_by,updated_by,created_date,updated_date) 
    values('${id}',?,?,?,?,?,?,?,?,'${id} ','${id} ','${createdDate} ','${createdDate} ')`

    localdb.query(inserquery, [fname, lname, email, password, location, age, phone, email], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

storeex.post('/login', (request, response) => {
    let { email, password } = request.body
    let loginquery = 'select * from register where email=?'
    localdb.query(loginquery, [email], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else if (result.length > 0) {
            console.log(result)
            let dbusername = result[0].email
            let dbpassword = result[0].password
            let id = result[0].id
            let roll = result[0].role
            if (dbusername === email && dbpassword === password) {
                response.send({ "status": "success", "id": id, "roll": roll })
            }
            else {
                response.send({ "status": "invalid" })
            }
        }
        else {
            response.send({ "status": "empty_set" })
        }
    })
})

storeex.post('/updateuser/:id', (request, response) => {
    let { id } = request.params
    let { fname, lname, email, password, location, age, phone, } = request.body
    console.log(fname, id);
    let updatequerry = 'update register set fname=?,lname=?, email=?,password=?,location=?,age=?,phone=? where id=?'
    localdb.query(updatequerry, [fname, lname, email, password, location, age, phone, id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

storeex.post('/deleteservice', (request, response) => {
    let sno = request.body.sno
    let deletequery = 'delete from services where sno=?'
    localdb.query(deletequery, [sno], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log(result)
        }
    })
})

storeex.post('/deletebooking', (request, response) => {
    let bid = request.body.bid
    let deletequery = 'delete from booking where bid=?'
    localdb.query(deletequery, [bid], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log(result)
        }
    })
})

storeex.post('/deleteuser', (request, response) => {
    let id = request.body.id
    let deletequery = 'delete from register where id=?'
    localdb.query(deletequery, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log(result)
        }
    })
})

storeex.post('/booking', (request, response) => {
    var id = crypto.randomUUID();
    var datetime = new Date();
    var createdDate = datetime.toISOString().slice(0, 10)
    console.log(createdDate);

    let { bname, bmobile, baddress } = request.body
    let inserquery = `insert into practise.booking (bid,bname,bmobile,baddress) 
    values('${id}',?,?,?)`

    localdb.query(inserquery, [bname, bmobile, baddress], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})


storeex.listen(3005, () => {
    console.log("your port is running in 3005")
})
