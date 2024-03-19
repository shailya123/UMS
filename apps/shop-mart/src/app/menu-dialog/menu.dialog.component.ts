import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'shop-mart-menu-dialog',
  templateUrl: './menu.dialog.component.html',
  styleUrls: ['./menu.dialog.component.scss'],
    
  })
  export class MenuDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<MenuDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick() {
      this.dialogRef.close();
    }
  }