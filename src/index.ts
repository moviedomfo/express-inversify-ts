import 'reflect-metadata';
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
import PersonPubService from "./service/personPub.service";
import { IPersonPubService } from "./service/IPersonPubService";
import { personRouter } from "./rutes/personPub.router";
import './controllers/pesonPub.controller';
import DependencyIngection from './common/Container';

// const DIContainer = new Container({ defaultScope: "Singleton" });
//const DIContainer = new Container();

// DIContainer.bind<IPersonPubService>(TYPES.PersonPubService)
//   .to(PersonPubService)
//   .inSingletonScope();

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

if (!process.env.PORT) {
  process.exit(1);
}

const container= DependencyIngection.Init();


const PORT = process.env.PORT || 5000;
const URL = `${process.env.BASE_URL}:${PORT}`;

const server = new InversifyExpressServer(container );

server.setConfig((app) => {
  // add body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(express.json());//parses incoming JSON requests and puts the parsed data in req.body.
  app.use(helmet()); 
  app.use(morgan("short"));
  //app.use('/api/personspubs',personRouter); route isn´t needed 
});

const app = server.build();
/**
 * Server Activation
 */
app.listen(PORT);
console.log(`App listening on port ${PORT}`);
console.log(`API url ${URL}`);
