import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServersService {

  constructor(private http: Http) { }

  getServers() {
    return this.http.get('https://ng-http-demo-e2e52.firebaseio.com/data.json')
    .map((response: Response) => {    
      return response.json();
    })
    .catch((error: Response) => {
      return Observable.throw(error);
    });
  }

  saveServers(servers: any[]){
    return this.http.put('https://ng-http-demo-e2e52.firebaseio.com/data.json', servers);
  }

  getAppName() {
    return this.http.get('https://ng-http-demo-e2e52.firebaseio.com/appName.json')
    .map((response: Response) => {
      return response.json();
    });
  }

}
