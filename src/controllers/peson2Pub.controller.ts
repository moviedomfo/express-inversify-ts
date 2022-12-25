import { NextFunction, Request, Response } from "express";
import { Person } from "models/PersonBE";
import PersonPubServiceNoIngected from "../service/personPub.serviceNoIngected";
import { IPersonPubService } from "../service/IPersonPubService";

export default class Person2PubController {
  private personService: IPersonPubService;
  constructor() {
    this.personService = new PersonPubServiceNoIngected();
  }

  public async Provider(req: Request, res: Response, next: NextFunction) {
    try {
      const person: Person = req.body as Person;
      await this.personService.Provider(person);
      res.status(200).send();
    } catch (e) {
      next(e);
    }
  }

  public async Customer(req: Request, res: Response, next: NextFunction) {
    try {
      const person: Person = req.body as Person;
      await this.personService.Customer(person);
      res.status(200).send();
      //else res.status(403).send();
    } catch (e) {
      next(e);
    }
  }

  public async GetAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.personService.GetAll();

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  }

  public async GetById(id: string, res: Response, next: NextFunction) {
    try {
      //const id =  req.params.id;
      let idToint: number;
      parseInt(id, idToint);
      const result = await this.personService.GetById(idToint);

      if (result) res.status(200).send(result);
      else res.status(204).send();
    } catch (e) {
      next(e);
    }
  }

  public async ClearAll(req: Request, res: Response, next: NextFunction) {
    try {
      await this.personService.ClearAll();
      res.status(200).send(true);
    } catch (e) {
      next(e);
    }
  }
}
