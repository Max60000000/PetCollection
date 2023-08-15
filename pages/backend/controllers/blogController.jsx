// import expressAsyncHandler from "express-async-handler";
// import successResponse from "../helper/successResponse.js";
// import { Blog } from "../schema/model.js";

import expressAsyncHandler from "express-async-handler";
import { sendMail } from "../utils/sendmail";
import successResponse from "../helper/successResponse";
import Blog from "@/pages/components/Blog";

// import { sendMail } from "../utils/sendmail.js";

export let createBlog = expressAsyncHandler(async (req, res, next) => {
  let data = req.body;

  await sendMail({
    from: '"Unique" <uniquekc425@gmail.com>',
    to: ["dila.bhusal7@gmail.com", "nitanthapa425@gmail.com"],
    subject: "My first system email",
    html: `<h1>Hello world</h1>`,
  });

  let result = await Blog.create(data);
  successResponse(res, 201, "Blog created successfully", result);
});

export let readBlog = expressAsyncHandler(async (req, res, next) => {
  let result = await Blog.find({});
  successResponse(res, 200, "read Blog successfully", result);
});

export let readSpecificBlog = expressAsyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let result = await Blog.findById(id);
  successResponse(res, 200, "read Blog detail successfully", result);
});

export let updateSpecificBlog = expressAsyncHandler(
  async (req, res, next) => {
    let id = req.params.id;
    let data = req.body;
    let result = await Blog.findByIdAndUpdate(id, data);
    successResponse(res, 201, "update Blog detail successfully", result);
  }
);

export let deleteSpecificBlog = expressAsyncHandler(
  async (req, res, next) => {
    let id = req.params.id;
    let result = await Blog.findByIdAndDelete(id);
    successResponse(res, 200, "delete Blog  successfully", result);
  }
);
