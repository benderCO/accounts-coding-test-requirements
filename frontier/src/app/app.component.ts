import { Component, OnInit } from '@angular/core';
import { AccountsServiceService } from 'src/services/accounts-service.service';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public accounts: Observable<any>;

  public activeAccounts: [] = [];
  public overdueAccounts: [] = [];
  public inactiveAccounts: [] = [];

  constructor(
    private accountsServiceService: AccountsServiceService
  ) {}

  ngOnInit() {
    this.accounts = this.accountsServiceService.loadAllAccounts().pipe(
      tap((resp: []) => {
        this.activeAccounts = resp.filter((item: any) => item.AccountStatusId === 0) as any;
        this.overdueAccounts = resp.filter((item: any) => item.AccountStatusId === 2) as any;
        this.inactiveAccounts = resp.filter((item: any) => item.AccountStatusId === 1) as any;
      })
    );
  }
}
