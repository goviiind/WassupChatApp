const express = require("express");

const app =  express();

const http = require("http").createServer(app);



app.use(express.static(__dirname + "/public"));




app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})






//Socket


const io = require("socket.io")(http)

io.on("connection",(socket)=>{
    console.log("connected...");
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg);
    })
})




http.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server is running on port 3000");
})




