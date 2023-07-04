const { model, Schema } = require("mongoose");
const Owner = require("../model/Owner");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    species: {
      type: String,
      required: [true, "species is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    weight: {
      type: String,
      required: [true, "weight is required"],
    },
    imgUrl: {
      type: String,
      required: [true, "imgUrl is required"],
    },
    Owner: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
    },
  },
  { collection: "Petdb" }
);

module.exports = model("Pet", petSchema);
