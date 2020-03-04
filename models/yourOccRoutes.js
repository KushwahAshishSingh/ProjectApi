const getdb = require('../util/database').getDB;



class yourOccRoutes{
    constructor(ocup){
        this.occupation = ocup;
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
            .then(occup =>{
                console.log(occup);
                return occup;
            })
            .catch(err =>{
                console.log(err)
            });
    }

}

module.exports = yourOccRoutes;


