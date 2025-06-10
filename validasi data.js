const database = 'UTS';
const collection = 'validasi';

use(database);

db.createCollection(collection, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "umur", "JK", "riwayat_penyakit"],
      properties: {
        nama: {
          bsonType: "string",
          description: "harus berupa string"
        },
        umur: {
          bsonType: "int",
          minimum: 0,
          description: "harus berupa bilangan bulat positif"
        },
        JK: {
          bsonType: "string",
          enum: ["Laki-Laki", "Perempuan"],
          description: "hanya boleh 'Laki-Laki' atau 'Perempuan'"
        },
        riwayat_penyakit: {
          bsonType: "string",
          description: "harus berupa string"
        }
      }
    }
  }
});
