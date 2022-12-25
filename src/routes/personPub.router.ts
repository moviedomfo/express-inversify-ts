
import Person2PubController from "../controllers/peson2Pub.controller";
import express  from "express";
export const personRouter = express.Router();

const personPubController :Person2PubController = new  Person2PubController();

personRouter.post("/provider", personPubController.Provider);
personRouter.post("/customer", personPubController.Customer);
personRouter.get("/",  personPubController.GetAll);
// personRouter.get("/:id",  personPubController.GetById);


