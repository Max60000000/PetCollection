// import expressAsyncHandler from "express-async-handler";
// import successResponse from "../helper/successResponse.js";
// import { Breeds } from "../schema/model.js";
// import { sendMail } from "../utils/sendmail.js";

import expressAsyncHandler from "express-async-handler";
import { sendMail } from "../utils/sendmail";
import successResponse from "../helper/successResponse";
import Breeds from "@/pages/components/Breeds";

export let createBreeds = expressAsyncHandler(async (req, res, next) => {
  let data = req.body;

  await sendMail({
    from: '"Unique" <uniquekc425@gmail.com>',
    to: ["dila.bhusal7@gmail.com", "nitanthapa425@gmail.com"],
    subject: "My first system email",
    html: `<h1>Hello world</h1>`,
  });

  let result = await Breeds.create(data);
  successResponse(res, 201, "Breeds created successfully", result);
});

export let readBreeds = expressAsyncHandler(async (req, res, next) => {
  let result = await Breeds.find({});
  successResponse(res, 200, "read Breeds successfully", result);
});

export let readSpecificBreeds = expressAsyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let result = await Breeds.findById(id);
  successResponse(res, 200, "read Breeds detail successfully", result);
});

export let updateSpecificBreeds = expressAsyncHandler(
  async (req, res, next) => {
    let id = req.params.id;
    let data = req.body;
    let result = await Breeds.findByIdAndUpdate(id, data);
    successResponse(res, 201, "update Breeds detail successfully", result);
  }
);

export let deleteSpecificBreeds = expressAsyncHandler(
  async (req, res, next) => {
    let id = req.params.id;
    let result = await Breeds.findByIdAndDelete(id);
    successResponse(res, 200, "delete Breeds  successfully", result);
  }
);
