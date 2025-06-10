const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].deleteOne({nama : "Rizky Adiwijaya"});

db[collection].find();