const { model, Schema } = require("mongoose");

const ownerSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
  },
  { collection: "Ownerdb" }
);

module.exports = model("Owner", ownerSchema);
