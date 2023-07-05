const { comparePassword, signToken } = require("../helpers/helper");
const User = require("../model/User");
const Medicine = require("../model/Medicine");

module.exports = class StaffController {
  static async userRegister(req, res, next) {
    try {
      const { username, email, password } = req.body;

      if (!username) throw { name: "Username Empty" };
      if (!email) throw { name: "Email Empty" };
      if (!password) throw { name: "Password Empty" };

      let isRegisterd = await User.findOne({ email });
      if (isRegisterd) throw { name: "Email Not Unique" };

      let newUser = new User({ username, email, password });
      await newUser.save();

      res.status(201).json({
        message: `user with email ${newUser.email} create successfully`,
      });
    } catch (error) {
      console.log(
        "🚀 ~ staffController.js ~ StaffController ~ userRegister:",
        error
      );
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "Email Empty" };
      if (!password) throw { name: "Password Empty" };

      const user = await User.findOne({ email });
      if (!user) throw { name: "Email False" };

      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw { name: "Password False" };

      const payload = { id: user._id };
      const token = signToken(payload);

      res.status(200).json({ username: user.username, access_token: token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createMedicine(req, res, next) {
    try {
      const { name, category, imgUrl, price, minQuantity } = req.body;

      if (!name) throw { name: "Name Empty" };
      if (!category) throw { name: "Category Empty" };
      if (!imgUrl) throw { name: "Image Empty" };
      if (!price) throw { name: "Price Empty" };
      if (!minQuantity) throw { name: "Quantity Empty" };

      const medicine = new Medicine(req.body);
      await medicine.save();

      res.status(201).json(medicine);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
