import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, getUsersExceptAdmin, updateUser } from "../controllers/users.controller.mjs";

const usersRouter = Router();

usersRouter.get('/', getUsers);

usersRouter.get("/all", getUsersExceptAdmin)

usersRouter.get('/:id', getUser);

usersRouter.post('/', createUser);

usersRouter.put('/:id', updateUser);

usersRouter.delete('/:id', deleteUser);

export default usersRouter;