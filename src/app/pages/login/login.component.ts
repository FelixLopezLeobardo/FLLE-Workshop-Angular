import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;

  constructor(
    private router:Router,
    private authService:AuthService,private snackbar: MatSnackBar){
   

    
  }

  ngOnInit(): void {
      
    if(this.authService.isLoggedIn()){
      this.router.navigate(["/"]);
    }
    this.user={
      usuario:"",
      password:""
    }

  }

  login(): void{
    this.authService.login(this.user.usuario,this.user.password).subscribe({
      next: ()=>{
        this.router.navigate(["/welcome"]);
      }, error:()=> this.snackbar.open("Ocurrió un error","aceptar",{duration:10000})
    });
  }

}
