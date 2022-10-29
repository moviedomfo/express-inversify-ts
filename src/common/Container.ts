// import { TYPES } from './commonConstants';
import { TYPES } from './commonConstants';

import { Container } from 'inversify';
import PersonPubService from './../service/personPub.service';
import { IPersonPubService } from './../service/IPersonPubService';

const DIContainer = new Container({ defaultScope: "Singleton" });


  export default class DependencyIngection 
{
   

    public static Init = () : Container=>{
        // set up services and repos bindings
        DIContainer.bind<IPersonPubService>(TYPES.PersonPubService)
        .to(PersonPubService)
        .inSingletonScope();   
        return DIContainer;
    }
    

}



