const mysql = require('mysql');

const mydatabase = mysql.createConnection({
        host: 'localhost',
        port: 9000,
        database:"shoppingcart",
        user: 'root',
        password: "",
});

myDB.connect((err)=>{
        if(err) console.log("error")
            else
        console.log("connected to server")
})

module.exports=myDB
