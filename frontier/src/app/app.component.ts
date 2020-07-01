import { Component, OnInit } from '@angular/core';
import { AccountsServiceService } from 'src/services/accounts.service';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

// TODO: Clean up into common index export
import { Account } from 'src/datatypes/accounts/account';
import { AccountStatus } from 'src/datatypes/enums/accountstatus.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public accounts: Observable<any>;

  public activeAccounts: any[] = new Array();
  public overdueAccounts: any[] = new Array();
  public inactiveAccounts: any[] = new Array();

  constructor(
    private accountsServiceService: AccountsServiceService
  ) {}

  ngOnInit() {
    this.accounts = this.accountsServiceService.loadAllAccounts().pipe(
      tap((resp: Account[]) => {
        resp.map((account: Account) => {
          switch (account.AccountStatusId) {
            case AccountStatus.Active:
              this.activeAccounts.push(account);
              break;
            case AccountStatus.Overdue:
              this.overdueAccounts.push(account);
              break;
            case AccountStatus.Inactive:
              this.inactiveAccounts.push(account);
              break;
            default:
              console.warn('Invalid Account Status: ', account)
        }});
      })
    );
  }
}
