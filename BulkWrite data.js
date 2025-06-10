const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].bulkWrite([
    {
        insertOne: {
            document : {nama : "Rizky Adiwijaya", umur : 22, JK : "Laki-Laki", riwayat_penyakit : "Batuk"}
        }
    },
    {
        updateOne: {
            filter: { nama : "ade indawan"},
            update: { $set: {umur : 22}}
        }
    },
    {
        deleteOne: {
            filter: {nama: "Windy"}
        }
    }
]);

db[collection].find();