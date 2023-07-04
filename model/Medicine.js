const { model, Schema } = require("mongoose");

const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    category: String,
    imgUrl: {
      type: String,
      required: [true, "imgUrl is required"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    minQuantity: String,
  },
  { collection: "Medicinedb" }
);

module.exports = model("Medicine", medicineSchema);
