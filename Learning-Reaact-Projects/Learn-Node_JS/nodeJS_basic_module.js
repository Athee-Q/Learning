const fs = require('fs')
const path = require('path')

// this coding structure is also called as call back hell 

fs.writeFile(path.join(__dirname,'practice.js'),"console.log('Helloo Makkale , lets do somthing ')",(err)=>{
    if(err)throw err;
    console.log('write complete')
    fs.appendFile(path.join(__dirname,'practice.js'),"\n\n console.log('welcome to our java script practice , dont be think as be im possible very thing is possible to do ....so dont worry')",(err)=>{
        if(err)throw err;
        console.log('append complete')
        fs.rename(path.join(__dirname,'practice.js'),path.join(__dirname,'nodeJS_Async.mjs'),(err)=>{
            if(err)throw err;
            console.log('Rename complete')
        })
    })
});
fs.readFile(path.join(__dirname,'practice.js'),'utf8',(err,data)=>{
    if(err) throw err ;
    console.log(data)
})


// exit on uncaugth errors

process.on ('uncaughtException',err => {
    console.error(err)
    process.exit(1)
})