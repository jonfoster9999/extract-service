import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private url :string, private http: Http) { 
  }

  getResources() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getResource(id) {
    return this.http.get(this.url + "/" + id)
      .map(res => res.json());
  }
}
