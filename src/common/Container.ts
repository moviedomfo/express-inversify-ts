// import { TYPES } from './commonConstants';
import { TYPES } from './commonConstants';

import { Container } from 'inversify';
import PersonPubService, { IPersonPubService } from './../service/personPub.service';

export const CONTAINER = new Container({ defaultScope: "Singleton" });
export default class DependencyIngection 
{
   

    public static Init = () : void=>{
        // set up services and repos bindings
        CONTAINER.bind<IPersonPubService>(TYPES.PersonPubService).to(PersonPubService).inSingletonScope();
    }
    

}



