import { TYPES } from "./common/commonConstants";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
// import DependencyIngection, { CONTAINER } from '../src/common/Container';
import * as bodyParser from "body-parser";

// declare metadata by @controller annotation
import "./controllers/pesonPub.controller";
import { InversifyExpressServer } from "inversify-express-utils";

import { Container } from "inversify";
import "reflect-metadata";

import PersonPubService from "./service/personPub.service";
import { IPersonPubService } from "./service/IPersonPubService";

export const CONTAINER = new Container({ defaultScope: "Singleton" });

CONTAINER.bind<IPersonPubService>(TYPES.PersonPubService)
  .to(PersonPubService)
  .inSingletonScope();

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

if (!process.env.PORT) {
  process.exit(1);
}

//DependencyIngection.Init();




const PORT = process.env.PORT || 5000;
const URL = `${process.env.BASE_URL}:${PORT}`;

const server = new InversifyExpressServer(CONTAINER);

server.setConfig((app) => {
  // add body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("short"));
  //app.use('/api/personspubs',personRouter);

});

const app = server.build();
/**
 * Server Activation
 */
app.listen(PORT);
console.log(`App listening on port ${PORT}`);
console.log(`API url ${URL}`);
