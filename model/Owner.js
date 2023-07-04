const { model, Schema } = require("mongoose");
const Pet = require("../model/Pet");
const Appoinment = require("../model/Appoinment");

const ownerSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a email format`,
      },
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    phoneNumber: String,
    address: String,
    Pet: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
    Appoinment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Appoinment",
      },
    ],
  },
  { collection: "Ownerdb" }
);

module.exports = model("Owner", ownerSchema);
