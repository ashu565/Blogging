const express = require("express");
const authController = require("../controllers/authController");
const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");
const router = express.Router();

router.post("/createBlog", authController.protect, blogController.createBlog);
router.get("/getAllBlog", authController.protect, blogController.getAllBlog);
router.get(
  "/getAllBlogFromUser/:id",
  authController.protect,
  blogController.getAllBlogFromUser
);
router.patch(
  "/updateBlog/:id",
  authController.protect,
  blogController.updateBlog
);
router.delete(
  "/deleteBlog/:id",
  authController.protect,
  blogController.deleteBlog
);
router.post(
  "/createComment",
  authController.protect,
  commentController.createComment
);
module.exports = router;
