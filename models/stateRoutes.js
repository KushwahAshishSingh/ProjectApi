const getdb = require('../util/database').getDB;


class stateRoute{
    constructor(state){
        this.state = state;
    }
    save(){
        const db = getdb();
        return db
        .collection('stateAdd')
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
            .collection('stateAdd')
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

module.exports = stateRoute;