const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].find();
db[collection].find({
    nama : "Rizky Adiwijaya"
});