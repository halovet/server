const { model, Schema } = require("mongoose");
const Doctor = require("../model/Doctor");
const Pet = require("../model/Pet");
const Owner = require("../model/Owner");

const appoinmentSchema = new Schema(
  {
    Doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: [true, "doctor is required"],
    },
    Pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
      required: [true, "pet is required"],
    },
    Owner: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
      required: [true, "owner is required"],
    },
    schedule: {
      type: String,
      required: [true, "schedule is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { collection: "Appoinmentdb" }
);

module.exports = model("Appoinment", appoinmentSchema);
