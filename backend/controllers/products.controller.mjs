import * as productServices from "../services/products.service.mjs";

export const getProducts = (req, res) => {
  productServices
    .getAllProducts()
    .then((result) => {
      res.status(200).json({
        message: "Products retrieved",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createProduct = (req, res) => {
  const product = req.body;

  productServices
    .createProduct(product)
    .then((result) => {
      res.status(201).json({
        message: "Product created",
        data: product,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({
        message: "Failed to create product",
        error: err,
      });
    });
};

export const getProductById = (req, res) => {
  const { id } = req.params;

  productServices
    .getProductById(id)
    .then((result) => {
      res.status(200).json({
        message: "Product retrieved",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = req.body;

  // res.status(200).json({
  //   message: "Product updated",
  //   data: product,
  // });

  productServices
    .updateProduct(id, product)
    .then((result) => {
      res.status(200).json({
        message: "Product updated",
        data: product,
        result,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;

  productServices
    .deleteProduct(id)
    .then((result) => {
      res.status(200).json({
        message: "Product deleted",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
