const { model, Schema } = require("mongoose");

const doctorSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,
    address: String,
    clinic: String,
    price: Number,
    imgUrl: String,
  },
  { collection: "Doctordb" }
);

module.exports = model("Doctor", doctorSchema);
