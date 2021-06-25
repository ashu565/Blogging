const Blog = require("../model/blogModel");
// const AppError = require("../utils/AppError");
exports.createBlog = async (req, res, next) => {
  try {
    const { author, title, description } = req.body;
    const document = await Blog.create({
      author,
      title,
      description,
    });
    res.status(201).json({
      status: "success",
      data: {
        document,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllBlog = async (req, res, next) => {
  try {
    const document = await Blog.find().populate("comments");
    console.log(document);
    res.status(201).json({
      status: "success",
      data: {
        document,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllBlogFromUser = async (req, res, next) => {
  try {
    const documents = await Blog.find();
    const filtered_documents = documents.map((document) => {
      if (document.author.id === req.params.id) {
        return document;
      }
    });
    console.log(filtered_documents);
    res.status(200).json({
      status: "success",
      data: {
        filtered_documents,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: false,
    });
    res.status(200).json({
      status: "success",
      data: {
        updatedBlog,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
