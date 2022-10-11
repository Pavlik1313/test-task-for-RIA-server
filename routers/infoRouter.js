import express from "express";
import {getInfo} from "../controllers/infoController.js"

const infoRouter = express.Router();

infoRouter.route('/')
    .get(getInfo);

export default infoRouter