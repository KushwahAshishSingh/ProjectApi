const getdb = require('../util/database').getDB;

class userLogin{
    constructor(name, age, email, password,phoneNo){
        this.name = "ashish";
        this.email = "kdfads";
        this.password = "123456";
        this.phoneNo = 3242;
        this.age = require('mongodb').age;
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