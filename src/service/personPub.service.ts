import { Providers } from './../models/Store';
import { Person } from "models/PersonBE";
import { injectable } from 'inversify';
import { IPersonPubService } from './IPersonPubService';



@injectable()
export default class PersonPubService implements IPersonPubService {
  // @Post("/Client")
  public async Customer(req: Person): Promise<void> {
    try {
      await pushToQueue(req,"customers");
    } catch (err) {
      console.log("push err  " + JSON.stringify(err));
    }
  }

  public async Provider(req: Person): Promise<void> {
    try {
      await pushToQueue(req,"providers");
    } catch (err) {
      console.log("push err  " + JSON.stringify(err));
    }
  }

  // @Get("/getById")
  public async GetById(id: number): Promise<Person> {
    return getById(id);
  }

  // @Get("/getAll")
  public async GetAll(): Promise<Person[]> {
    return getAll();
  }

  // @Get("/clearAll")j
  public async ClearAll(): Promise<void> {
    return clearAll();
  }
}

const pushToQueue = async (req: Person,queue : string) => {

  return new Promise(() => {
    if(queue)
      Providers.push(req);
    //resolve();
  });

};

const getById = async (id: number): Promise<Person> => {
  return new Promise<Person>((resolve, reject) => {
    
    const res = Providers.find(x => x.Id === id);
    resolve(res);
  });
};

const getAll = async (): Promise<Person[]> => {
  return new Promise<Person[]>((resolve) => {
    const res =  Providers;
   

    resolve(res);
  });
};

const clearAll = async (): Promise<void> => {
  return new Promise<void>((resolve) => {
   
    //Providers= [];
    resolve();
  });
   
};

