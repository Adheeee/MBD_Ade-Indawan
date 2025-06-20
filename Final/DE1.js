const database = 'UAS_MBD_DEE';
const collection = 'DEE';

use(database);

db.createCollection(collection);

db.DEE.insertMany([
  { key: "user:1", value: "A.Ade Indawan" },
  { key: "user:2", value: "Rizky Adiwijaya" },
  { key: "user:3", value: "Heri Phutra" },
  { key: "user:4", value: "Nurlinda Ahmad" },
  { key: "user:5", value: "Windi" }
]);