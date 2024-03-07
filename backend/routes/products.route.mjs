import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.mjs";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductById);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);
productsRouter.post("/", createProduct);

export default productsRouter;
