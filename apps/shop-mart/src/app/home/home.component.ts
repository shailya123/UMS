import { Component, OnInit } from '@angular/core';
import { AzureAdService } from '../azure-ad-service';

@Component({
  selector: 'shop-mart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isUserLoggedIn!: boolean;
  constructor(private _azureAdService: AzureAdService) {}
  ngOnInit() {

    this._azureAdService.isUserLoggedIn.subscribe((x) => {
        console.log(x);
      this.isUserLoggedIn = x;
    });
    console.log(this.isUserLoggedIn);
  }

  onclick(){
    console.log("onclick()");
  }
}
