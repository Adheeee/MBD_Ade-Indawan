const database = 'UTS';
const collection = 'ADE';


use(database);

db.createCollection(collection);

db[collection].insertMany([
    {nama : "ade indawan", umur : 21 , JK : "Perempuan" , riwayat_penyakit : "maag"},
    {nama : "Rizky Adiwijaya", umur : 22 , JK : "Laki-laki" , riwayat_penyakit : "Batuk"},
    {nama : "Windy", umur : 22 , JK : "Perempuan" , riwayat_penyakit : "sakit perut"}
]);
