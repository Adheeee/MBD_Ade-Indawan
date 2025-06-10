const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].aggregate([
    {
        $group: {
            _id: "$kategori",
            totalUmur: {$sum: "$umur"},
            rataUmur: {$avg: "$umur"}
        }
    }
]);