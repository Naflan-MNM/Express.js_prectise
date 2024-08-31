const express = require('express');//get the express framwork
const app = express();//commanly all the developers use this 'app' variable insted of express
const path = require('path');
const PORT = process.env.PORT || 3500;// allocating the port address for our web-server

app.get('^/$|/index(.html)?',(req,res)=>{ //this is will work in get request 
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/new-page(.html)?',(req,res)=>{ //this is will work in get request 
    res.sendFile(path.join(__dirname,'views','new-page.html'))
})
    

//chain
const one = (req,res,next)=>{
    console.log('one')
    next();
}
const two = (req,res,next)=>{
    console.log('two');
    next();
}
const three = (req,res)=>{
    console.log('three');
    res.send('finished!')
}
app.get('/chain(.html)?',[one,two,three])


app.get('/*',(req,res)=>{// here the resion for that status() code is to tell to the browser to mention this is a 404 state otherwise that doesnt know about this ..
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})




app.listen(PORT, () => console.log(`server running on the port of ${PORT}`))// starting the server