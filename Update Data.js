const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].updateOne(
    {nama : "Windy"},
    {$set : {umur : 31}}
);

db[collection].find();