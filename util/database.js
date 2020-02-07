const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://MongoExercise:1234512345@mongodb-n4mfl.mongodb.net/test?retryWrites=true&w=majority"
let _db;

const mongoConnect = callback =>{
    mongoClient.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(client =>{ 
        console.log('connected');
        _db = client.db();
        callback();
    }).catch(err =>{
        console.log(err);
    });
};

const getDB = () =>{
    if(_db){
        return _db
    }
    throw 'no database found';
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;