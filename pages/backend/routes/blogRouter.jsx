// import { Router } from "express";
// import {
//   createBlog,
//   deleteSpecificBlog,
//   readBlog,
//   readSpecificBlog,
//   updateSpecificBlog,
// } from "../controllers/BlogController.js";

import { Router } from "next/router";

let blogRouter = Router();

blogRouter.route("/").post(createBlog).get(readBlog);

blogRouter
  .route("/:id")
  .get(readSpecificBlog)
  .delete(deleteSpecificBlog)
  .patch(updateSpecificBlog);

export default blogRouter;
