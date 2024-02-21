class User {
    static  users = 0 ; 
    constructor(name,age){
        this.name = name;
        this.age = age ;
        User.users++
    }
    login (){
        console.log('hi',this.name ,'well come to our page')
        if(this.age > 18){
            console.log('you eligible')
        }else{
            console.log('you are not eligible')
            
        }
    }
    logout (){
        console.log('Bye Bye')
    }
    static displayusers(){
        console.log('total number of users is',User.users)
    }
}


class Paiduser extends User {
    constructor(name,age,gp){
        super(name,age);
        this.gp = gp; 
    }
    message (){

        console.log(this.name,'you have' ,this.gp,'GP')
    }
}
const one = new User ('Jasam',25)
let two = new User ('Atheeq', 16)
one.login()
two.login()
console.log(User.users)
User.displayusers()

 let three = new Paiduser('Hanifa',27,100)
 three.login()
 three.message()
 