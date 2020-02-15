const getdb = require('../util/database').getDB;


class sportsRoute{
    constructor(sport){
        this.sport = sport;
    }
    save(){
        const db = getdb();
        return db
        .collection('sportData')
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
            .collection('sportData')
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

module.exports = sportsRoute;