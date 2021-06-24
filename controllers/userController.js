const User = require("../model/userModel");
const AppError = require("../model/userModel");

exports.updateMe = async (req, res, next) => {
  try {
    // req.user is my current user
    const updated_details = req.body;
    const filtered_updated_details = {};
    Object.keys(updated_details).forEach((obj) => {
      if (obj !== "password" && obj !== "passwordConfirm") {
        filtered_updated_details[obj] = updated_details[obj];
      }
    });
    console.log(filtered_updated_details);
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      filtered_updated_details,
      {
        runValidators: true,
        new: true,
      }
    );
    updatedUser.password = undefined;
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteMe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { active: false });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
