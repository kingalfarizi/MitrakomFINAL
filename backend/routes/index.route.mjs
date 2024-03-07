import { Router } from "express";
import usersRouter from "./users.route.mjs";
import captchaRouter from "./captcha.route.mjs";
import ordersRouter from "./orders.route.mjs";
import productsRouter from "./products.route.mjs";
import postRouter from "./posts.route.mjs";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Server Deployed 🥳");
});
indexRouter.use("/users", usersRouter);
indexRouter.use("/orders", ordersRouter);
indexRouter.use("/products", productsRouter);
indexRouter.use("/posts", postRouter);

indexRouter.use("/verify-recaptcha", captchaRouter);

export default indexRouter;
