import { Person } from "../models/PersonBE";

export interface IPersonPubService {
    Customer: (req: Person) => Promise<void>;
    Provider: (req: Person) => Promise<void>;
    GetById: (id: number) => Promise<Person>;
    GetAll: () => Promise<Person[]>;
    ClearAll: () => Promise<void>;
  }