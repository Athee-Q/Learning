/* const p1 = new Promise ((resolve , reject ) => {
let reached = true
if  (reached)
 setTimeout(resolve,1000,"jasam reached")
else 
 reject("jasam not reached")
})  */
/* const p2 = new Promise ((resolve , reject ) => {
let reached = true
if  (reached)
 setTimeout(resolve,1000,"hanifa reached")
else 
 reject("hanifa not reached")
}) 
const p3 = new Promise ((resolve , reject ) => {
let reached = true
if  (reached)
 setTimeout(resolve,1000,"mahadhir reached")
else 
 reject("mahadhir not reached")
})  */

// p1.then(msg => console.log(msg)).catch(err => err)
// Promise.all([p1,p2,p3]).then(msg => console.log(msg)).catch(err => err)
// Promise.allsettled([p1,p2,p3]).then(msg => console.log(msg)).catch(err => err)
// Promise.race([p1,p2,p3]).then(msg => console.log(msg)).catch(err => err)
// Promise.any([p1,p2,p3]).then(msg => console.log(msg)).catch(err => err)

function getAge(a){
    const person = new Promise ((resolve,reject) => {
        let age = a;
        if (age >= 18){
            resolve('you are eligible for vote')
        }else{
            reject('you are not eligible for vote')
        }
    })
    return person;
 }
getAge(12).then(result=>console.log(result)).catch(result=>console.log(result))