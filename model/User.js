const { model, Schema } = require("mongoose");

const userSchema = new Schema(
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
    role: {
      type: String,
      required: [true, "role is required"],
    },
  },
  { collection: "Userdb" }
);

module.exports = model("User", userSchema);
