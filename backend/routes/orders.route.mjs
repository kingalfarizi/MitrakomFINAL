import { Router } from "express";
import { createOrder, getAllOrders, getOrderById, getOrderByUserId, updateOrderStatus } from "../controllers/orders.controller.mjs";

const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);

ordersRouter.post('/', createOrder);

ordersRouter.get('/user/:id', getOrderByUserId)

ordersRouter.get('/:id', getOrderById);

ordersRouter.put('/:id', updateOrderStatus);

ordersRouter.delete('/:id', () => {});

export default ordersRouter;