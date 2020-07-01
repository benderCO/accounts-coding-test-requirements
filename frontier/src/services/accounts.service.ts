import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Account } from 'src/datatypes/accounts/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {

  constructor(
    private http: HttpClient
  ) {}

  public loadAllAccounts(): Observable<Account[]> {
    return this.http.get(environment.accountUrl + 'getall').pipe(map((resp) => resp as Account[]));
  }
}
