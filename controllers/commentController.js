const Comment = require("../model/commentModel");

exports.getAllComments = async (req, res, next) => {
  try {
    const comment = await Comment.find({
      blog: req.params.id,
    });
    res.status(201).json({
      comment,
    });
  } catch (err) {
    next(err);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      blog: req.body.blog,
      user: req.user._id,
    });
    res.status(201).json({
      status: "success",
      user: req.user,
      comment,
    });
  } catch (err) {
    next(err);
  }
};
exports.updateComment = async (req, res, next) => {
  try {
    const updatedData = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: false,
        new: true,
      }
    );
    res.status(204).json({
      status: "success",
      data: updatedData,
    });
  } catch (err) {
    next(err);
  }
};
