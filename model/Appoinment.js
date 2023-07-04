const { model, Schema } = require("mongoose");

const appoinmentSchema = new Schema(
  {
    DoctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctordb",
    },
    PetId: {
      type: Schema.Types.ObjectId,
      ref: "Petdb",
    },
    OwnerId: {
      type: Schema.Types.ObjectId,
      ref: "Ownerdb",
    },
    schedule: String,
    description: String,
  },
  { collection: "Appoinmentdb" }
);

module.exports = model("Appoinment", appoinmentSchema);
