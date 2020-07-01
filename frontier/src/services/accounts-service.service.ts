import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {

  constructor(
    private http: HttpClient
  ) {}

  public loadAllAccounts(): Observable<any> {
    return this.http.get(environment.accountUrl + 'getall');
  }
}
