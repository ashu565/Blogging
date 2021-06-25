const Comment = require("../model/commentModel");
const AppError = require("../utils/AppError");

exports.createComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      user: req.body.user,
      blog: req.body.blog,
    });
    res.status(201).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (err) {
    next(err);
  }
};
