import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../assets/alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  message: string = '';

  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  

  signup(form){
    this.isLoading = true;   

    this.auth.signUP(form).subscribe(res=>{
      this.isLoading = false;
      this.message = `Successfully Registeration`;
      this.dialog.open(AlertDialogComponent,{
        data: {message:this.message}
      }).afterClosed().subscribe(re=>{
        this.router.navigateByUrl('');
      })
    },err=>{
      this.isLoading = false
      if(err.status === 400){

      }
      
    })
  }
  
}
