const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: "A Blog Must belong to a user",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogSchema.pre(/^find/, function (next) {
  this.populate({
    path: "author",
    select: "first_name last_name email",
  });
  next();
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
