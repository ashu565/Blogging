const Comment = require("../model/commentModel");

exports.createComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      blog: req.body.blog,
    });
    res.status(201).json({
      status: "success",
      user: req.user,
      data: {
        comment,
      },
    });
  } catch (err) {
    next(err);
  }
};
