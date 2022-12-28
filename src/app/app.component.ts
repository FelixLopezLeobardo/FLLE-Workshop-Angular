import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-FLLE';

  constructor(private autService : AuthService, private router: Router){

  }

  isAuthenticated(): boolean{
    return this.autService.isLoggedIn();
  }

  logout():void{
    this.autService.logout();
    this.router.navigate(['/login']);
  }

}
