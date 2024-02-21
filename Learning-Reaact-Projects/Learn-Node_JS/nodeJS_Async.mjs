import * as path from 'path';
import { dirname } from 'path';
import * as fs from 'node:fs/promises';


(async ()=>{
    try{
        await fs.writeFile(path.join(__dirname,'pract.js'),"console.log('Helloo Makkale')")
        await fs.appendFile(path.join(__dirname,'pract.js'),"\n\n console.log('welcome to our java script practice)")
    }catch(err){
        console.error(err);
    }
})()
fs.rename(path.join(__dirname,'server.js'),path.join(__dirname,'nodeJS_callBackHell.js'))