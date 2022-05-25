const WebSocket=require("ws")
const wss=new WebSocket.Server({port:3000})

wss.on("connection",ws=>{
    console.log('new client connected')
    
   
    ws.on("message",data=>{
        console.log(`Client has sent us:${data}`)
    })
   
    ws.on("close",()=>{
         console.log("disconnected")
    });
});

