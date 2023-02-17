import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly _apiUrl: string;

  constructor(private _http: HttpClient) {
    this._apiUrl = environment.apiUrl;
  }

  getResource(apiPath: string) {
    return this._http.get(`${this._apiUrl}/${apiPath}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
