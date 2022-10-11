import express from "express";
import {getBuildingNumbers} from "../controllers/buildingNumbersController.js"

const buildingNumbersRouter = express.Router();

buildingNumbersRouter.route('/building-numbers')
    .get(getBuildingNumbers);

export default buildingNumbersRouter