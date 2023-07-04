const { model, Schema } = require("mongoose");

const petSchema = new Schema(
  {
    name: String,
    species: String,
    age: String,
    weight: String,
    imgUrl: String,
    OwnerId: {
      type: Schema.Types.ObjectId,
      ref: "Ownerdb",
    },
  },
  { collection: "Petdb" }
);

module.exports = model("Pet", petSchema);
