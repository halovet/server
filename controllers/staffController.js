const { comparePassword, signToken } = require("../helpers/helper");
const User = require("../model/User");
const Medicine = require("../model/Medicine");
const { default: mongoose } = require("mongoose");

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

  static async allMedicine(req, res, next) {
    try {
      let { page, limit, search } = req.query;
      page ? page : (page = 1);
      limit ? limit : (limit = 10);
      search ? search : (search = "");

      const allMedicine = await Medicine.find({
        name: { $regex: search, $options: "i" },
      })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ name: "asc" });

      res.status(200).json(allMedicine);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async medicineById(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) throw { name: "Not Found" };

      const medicine = await Medicine.findById(id);
      if (!medicine) throw { name: "Not Found" };

      res.status(200).json(medicine);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async editMedicine(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) throw { name: "Not Found" };

      let updatedData = await Medicine.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteMedicine(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) throw { name: "Not Found" };

      let deletedData = await Medicine.findByIdAndDelete(id);
      if (!deletedData) throw { name: "Not Found" };

      res
        .status(200)
        .json({ message: `data with id ${id} deleted successfully` });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
