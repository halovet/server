const { model, Schema } = require("mongoose");

const obatSchema = new Schema(
  {
    name: String,
    category: String,
    imgUrl: String,
    price: Number,
    minQuantity: String,
  },
  { collection: "Obatdb" }
);

module.exports = model("Obat", obatSchema);
