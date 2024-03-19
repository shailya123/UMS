import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AzureAdService{
    isUserLoggedIn:Subject<boolean>=new Subject<boolean>();
    constructor(){}
}