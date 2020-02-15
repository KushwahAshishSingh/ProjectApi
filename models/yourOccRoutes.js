const getdb = require('../util/database').getDB;


class yourOccRoutes{
    constructor(occupation){
        this.occupation = occupation;
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
    static fetchAll(){
        const db = getdb();
        return db
            .collection('occupation')
            .find()
            .toArray()
            .then(occupation =>{
                console.log(occupation);
                return occupation;
            })
            .catch(err =>{
                console.log(err)
            });
    }

}

module.exports = yourOccRoutes;


