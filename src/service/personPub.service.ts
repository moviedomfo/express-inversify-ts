import { Providers, Customers } from './../models/Store';
import { Person } from "models/PersonBE";
import { injectable } from 'inversify';
import { IPersonPubService } from './IPersonPubService';
import { QUEUES } from './../common/commonConstants';



@injectable()
export default class PersonPubService implements IPersonPubService {
  
  public async Customer(req: Person): Promise<void> {
    try {
      await pushToQueue(req,QUEUES.Customers);
    } catch (err) {
      console.log("push err  " + JSON.stringify(err));
    }
  }

  public async Provider(req: Person): Promise<void> {
    try {
      await pushToQueue(req,QUEUES.Providers);
    } catch (err) {
      console.log("push err  " + JSON.stringify(err));
    }
  }

  public async GetById(id: number): Promise<Person> {
    return getById(id);
  }

  public async GetAll(): Promise<Person[]> {
    return getAll();
  }

  public async ClearAll(): Promise<void> {
    return clearAll();
  }
}

const pushToQueue = async (req: Person,queue : string) => {

  return new Promise((resolve,reject) => {
    if(queue === QUEUES.Providers)
    {
    Providers.push(req);
    resolve(null);
    }
  

    if(queue === QUEUES.Customers){
        Customers.push(req);
        resolve(null);
    }
      
 

      reject(`The QUEUE ${queue} doesn´t exist`);
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

