const { MongoClient } = require("mongodb");
const docs = require("../data/db.json");

const dbUrl = "mongodb://127.0.0.1:27017";

const client = new MongoClient(dbUrl);

async function run() {
  try {
    const database = client.db("halovet");

    const owner = database.collection("Ownerdb");
    const pet = database.collection("Petdb");
    const doctor = database.collection("Doctordb");
    const article = database.collection("Articledb");
    const appoinment = database.collection("Appoinmentdb");
    const medicine = database.collection("Medicinedb");
    const user = database.collection("Userdb");

    const option = { ordered: true };

    const resultOwner = await owner.insertMany(docs.Owner, option);
    const resultPet = await pet.insertMany(docs.Pet, option);
    const resultDoctor = await doctor.insertMany(docs.Doctor, option);
    const resultArticle = await article.insertMany(docs.Artikel, option);
    const resultAppoinment = await appoinment.insertMany(
      docs.Appoinment,
      option
    );
    const resultMedicine = await medicine.insertMany(docs.Obat, option);
    const resultUser = await user.insertMany(docs.User, option);

    console.log(resultOwner);
    console.log(resultPet);
    console.log(resultDoctor);
    console.log(resultArticle);
    console.log(resultAppoinment);
    console.log(resultMedicine);
    console.log(resultUser);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
