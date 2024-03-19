import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AzureAdService } from '../azure-ad-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuDialogComponent } from '../menu-dialog/menu.dialog.component';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-mart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn!: boolean;

  constructor(
    private _azureAdService: AzureAdService,
    public dialog: MatDialog,
    private _commonService: CommonService,
    private router: Router
  ) {}
  ngOnInit() {}

  logout() {
    this._commonService.signOut();
    this.router.navigate(['login']);
  }

  openMenuDialog() {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      data: { name: 'shailya', animal: 'dog' },
      position: {
        top: '0px',
        right: '100%',
        left: '0px',
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
