import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _httpService: HttpService) {}

  getListData(): Observable<any> {
    return this._httpService.getResource('posts');
  }
}
