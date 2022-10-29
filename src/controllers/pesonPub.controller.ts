

import {NextFunction, Request,Response} from 'express';
import { Person } from 'models/PersonBE';
import { IPersonPubService } from '../service/IPersonPubService';
import {  inject } from "inversify";
import { controller, httpGet, httpPost, request, requestParam, response } from 'inversify-express-utils';
import "reflect-metadata";


@controller("/personpub")
export default class PersonPubController {
  
  constructor(@inject("PersonPubService") private personService: IPersonPubService ) {       }

  @httpPost("/Provider")
  public async Provider( @request()req: Request, @response() res: Response, next: NextFunction) {
    try {
      const person: Person = req.body as Person;
       await this.personService.Provider(person);
       res.status(200).send();
    } catch (e) {
      next(e);
    }
  }

  @httpPost("/Customer")
  public async Customer(@request() req: Request, @response() res: Response, next: NextFunction) {
    try {
      const person: Person = req.body as Person;
       await this.personService.Customer(person);
       res.status(200).send();
      //else res.status(403).send();
    } catch (e) {
      next(e);
    }
  }

 
  @httpGet("/")
  public async GetAll(@request() req: Request, @response() res: Response, next: NextFunction) {
    try {

      const result = await this.personService.GetAll();

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
  @httpGet("/:id")
  public async GetById( @requestParam("id") id:string,@response()  res: Response, next: NextFunction) {
    try {
      //const id =  req.params.id;
      let idToint:number ;
      parseInt(id,idToint)
      const result = await this.personService.GetById(idToint);

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  }

  public async ClearAll(@request() req: Request, @response() res: Response, next: NextFunction) {
    try {
      
       await this.personService.ClearAll();
       res.status(200).send(true);
    } catch (e) {
      next(e);
    }
  }
}

export interface IPersonPubControlles{
  Customer (  req: Request, res: Response, next: NextFunction);
  Provider (  req: Request, res: Response, next: NextFunction);
   GetById( req: Request, res: Response, next: NextFunction);
   GetAll( req: Request, res: Response, next: NextFunction);
   ClearAll(req: Request, res: Response, next: NextFunction);
   
}
