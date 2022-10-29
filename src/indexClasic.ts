import 'dotenv/config'
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { personRouter } from "./rutes/personPub.router";
import * as bodyParser from 'body-parser';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

 if (!process.env.PORT) {
    process.exit(1);
 }

 
const app = express();

 app.use(helmet());
  app.use(express.json());
 app.use(morgan('short'));

 
 app.get('/', function (req, res) {
    res.send('Wellcome to Express with Inversity' );
  })

app.use('/api/personspubs',personRouter);
const PORT = process.env.PORT || 5000;
const URL = `${process.env.BASE_URL}:${PORT}`;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log(`API url ${URL}`);
  
});
