const express = require("express");
const authController = require("../controllers/authController");
const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");
const router = express.Router();

router.post("/createBlog", authController.protect, blogController.createBlog);
router.get("/getAllBlog", blogController.getAllBlog);
router.get("/getBlog/:blogId", blogController.getBlog);
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
router.get("/getAllComments/:id", commentController.getAllComments);
module.exports = router;
