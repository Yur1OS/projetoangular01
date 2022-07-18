import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthorizationGuard implements CanActivate{

    canActivate(){

        //Verificando se há algum token
        if(localStorage.getItem('access_token') != null) {
            return true;
        }
        else{
            window.location.href = "/login";
            return false;
        }
    }

}