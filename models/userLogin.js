const getdb = require('../util/database').getDB;
const mongodb = require('mongodb');
const objectId = mongodb.ObjectId;

class userLogin{
    constructor(name, age, email, password,phoneNo, id, userId){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.age = age;
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.userId = userId;
    }
    save(){
         //this.id = Math.random().toString();
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
    update(){
        const db = getdb();
        let dpOp;
        if(this._id){
            dpOp = db
            .collection('userInfo')
            .updateOne({_id: this._id},{$set : this});
        }else{
            dpOp = db.collection('userInfo').insertOne(this);
        }
    }



    static fetchAll(userId){
        const db = getdb();
        return db
            .collection('userInfo')
            .findOne({_id: new objectId(userId)})
            .then(userData =>{
                console.log(userData);
                //console.log(userId)
                return userData;
            })
            .catch(err =>{
                console.log(err)
            });
    }

}

module.exports = userLogin;