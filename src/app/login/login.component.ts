import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { User } from '../model/produit.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent implements OnInit {
  user = new User();
erreur=0;
  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin()
  { 
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    console.log(this.user);
    console.log(this.authService.loggedUser,this.authService.roles,this.authService.isloggedIn)
    if (isValidUser)
    this.router.navigate(['/']);
   else
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'login ou mot de passe erronés!'
    
  })
 // alert('Login ou mot de passe incorrecte!');
   this.erreur=1;
  }
}

