const { model, Schema } = require("mongoose");
const Doctor = require("./Doctor");

const articleSchema = new Schema(
  {
    headline: {
      type: String,
      required: [true, "headline is required"],
    },
    Doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: [true, "doctor is required"],
    },
    imgUrl: {
      type: String,
      required: [true, "image is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    source: Array,
    createdAt: {
      type: String,
      required: [true, "date is required"],
    },
  },
  { collection: "Articledb" }
);

module.exports = model("Article", articleSchema);
