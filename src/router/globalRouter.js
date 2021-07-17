import express from "express";
import {
    friendsController,
    homeController,
    messageController,
    profileControlelr,
} from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeController)
globalRouter.get("/friends", friendsController)
globalRouter.get("/message", messageController)
globalRouter.get("/profile", profileControlelr)

export default globalRouter;
