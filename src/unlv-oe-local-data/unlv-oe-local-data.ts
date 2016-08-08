import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UnlvOeLocalData {

  constructor(
    private http: Http
  ) {}

  getLocalData(): any {
    return this.http.get('assets/data/unlv-oe-local-data.json')
      .map(res => res.json());
  }

}
