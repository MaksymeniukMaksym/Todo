import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router ,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 

  constructor( private auth:AuthService, private router: Router) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.loggedIn()) {
        return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}