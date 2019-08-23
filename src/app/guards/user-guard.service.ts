import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { Router ,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
 

  constructor( private auth:AuthService, private router: Router) { }

public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.loggedIn()) {
        return true;
    }
    this.router.navigateByUrl('/todo');
    return false;
  }
}