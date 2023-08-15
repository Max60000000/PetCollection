import { Router } from "express";
// // import {
//   createBreeds,
//   deleteSpecificBreeds,
//   readBreeds,
//   readSpecificBreeds,
//   updateSpecificBreeds,
// // } from "../controllers/BreedsController.js";

let breedsRouter = Router();

breedsRouter.route("/").post(createBreeds).get(readBreeds);

breedsRouter
  .route("/:id")
  .get(readSpecificBreeds)
  .delete(deleteSpecificBreeds)
  .patch(updateSpecificBreeds);

export default breedsRouter;
