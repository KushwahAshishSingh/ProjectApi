const getdb = require('../util/database').getDB;


//  const ages = 25; const emails="nfsaj";
// const passwords = 232323; const phoneNos= 245465;



class userLogin{
    constructor(name, age, email, password,phoneNo){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.age = age;
    }
    save(){
        const db = getdb();
        return db
        .collection('userInfo')
        .insertOne(this)
        .then(result =>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err)
        });
    }
    static fetchAll(){
        const db = getdb();
        return db
            .collection('userInfo')
            .find()
            .toArray()
            .then(userData =>{
                console.log(userData);
                return userData;
            })
            .catch(err =>{
                console.log(err)
            });
    }

}
console.log('model user')
module.exports = userLogin;