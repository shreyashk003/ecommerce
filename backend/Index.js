const express=require('express')
const bp=require('body-parser')
const cors=require('cors')

const Port=9000

const App = new express()
App.use(cors({origin:'*'}))
App.use(bp.json())

App.get("/api/sayhello",(req,resp)=>{
    resp.send("<h1>hello world</h1>")
})



App.listen(Port,err=>{
    if(err)
        console.log("error")
    else
    console.log("Server running at Port--9000")
})