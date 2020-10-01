import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class StocksService {

  constructor(private _http:HttpClient) {}

  tickerHistorical() {
    return this._http.get("http://localhost:3000/historical/ITSA4")
      .pipe(map(result => result));
  }

}
