const getdb = require('../util/database').getDB;


class userLogin{
    constructor(name, age, email, password,phoneNo){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.age = age;
    }
    save(){
         this.id = Math.random().toString();
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

module.exports = userLogin;