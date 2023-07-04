const { model, Schema } = require("mongoose");

const artikelSchema = new Schema(
  {
    headline: String,
    DoctorId: String,
    imgUrl: String,
    description: String,
    source: Array,
  },
  { collection: "Artikeldb" }
);

module.exports = model("Artikel", artikelSchema);
