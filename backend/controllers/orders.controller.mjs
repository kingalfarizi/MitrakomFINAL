import * as orderServices from "../services/orders.service.mjs";

export const createOrder = (req, res) => {
  const order = req.body;
  orderServices
    .createOrder(order)
    .then((data) => {
      res.status(200).json({
        message: "Order created",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const getOrderByUserId = (req, res) => {
  const id = req.params.id;
  orderServices
    .getOrderByUserId(id)
    .then((data) => {
      res.status(200).json({
        message: "Order found",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const getAllOrders = (req, res) => {
  orderServices
    .getAllOrders()
    .then((data) => {
      res.status(200).json({
        message: "All orders",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const getOrderById = (req, res) => {
  const { id } = req.params;
  orderServices
    .getOrderById(id)
    .then((data) => {
      res.status(200).json({
        message: "Order Detail",
        data: data[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const updateOrderStatus = (req, res) => {
  const { id } = req.params;
  const { statusOrder } = req.body;

  orderServices
    .updateOrderStatus(id, statusOrder)
    .then((data) => {
      res.status(200).json({
        message: "Order status updated",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
