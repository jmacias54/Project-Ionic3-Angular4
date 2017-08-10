import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsServicesProvider {

  private urlPosts : string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    console.log('Hello PostsServicesProvider Provider');
  }


  getAllPosts(){
    return this.http.get(this.urlPosts)
    .do( (res:Response )=> console.log(res))
    .map(this.extraData)
    .catch(this.catchError);
  }

  private extraData(res:Response){
    return res.json();
  }

  private catchError(error:Response){
    console.log(error);
    return Observable.throw(error.json || "Server Error");
  }
}
