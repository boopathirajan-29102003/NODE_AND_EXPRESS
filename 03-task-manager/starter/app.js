const express =require('express')
const app=express()

//routs
app.arguments('/hello',(req,res)=>{
    res.send('Task manager app')
})

const port=3000
app.listen(port,()=>
    {console.log('server is running')})