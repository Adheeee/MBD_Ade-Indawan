const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].find({
    $or : [
        { umur : {$gt : 20}}
    ]
});