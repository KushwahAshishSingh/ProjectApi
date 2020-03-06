const getdb = require('../util/database').getDB;



class yourOccRoutes{
    constructor(degree, id, userId){
        this.degree = degree;
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.userId = userId;
    }
    save(){
        const db = getdb();
        return db
        .collection('occupation')
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
            .collection('occupation')
            .updateOne({_id: this._id},{$set : this});
        }else{
            dpOp = db.collection('userInfo').insertOne(this);
        }
    }
    static fetchAll(userId){
        const db = getdb();
        return db
            .collection('occupation')
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

module.exports = yourOccRoutes;


