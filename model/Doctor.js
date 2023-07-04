const { model, Schema } = require("mongoose");
const Appoinment = require("../model/Appoinment");

const doctorSchema = new Schema(
  {
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
    name: {
      type: String,
      required: [true, "name is required"],
    },
    address: String,
    clinic: String,
    price: Number,
    imgUrl: {
      type: String,
      required: [true, "imgUrl is required"],
    },
    Appoinment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Appoinment",
      },
    ],
  },
  { collection: "Doctordb" }
);

module.exports = model("Doctor", doctorSchema);
