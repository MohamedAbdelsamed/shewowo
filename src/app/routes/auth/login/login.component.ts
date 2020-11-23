import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/components/assets/alert-dialog/alert-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  message: string = '';

  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  

  login(form){
    this.isLoading = true;   

    this.auth.login(form).subscribe(res=>{
      this.isLoading = false;
      this.message = `Successfully Login`;
      this.dialog.open(AlertDialogComponent,{
        data: {message:this.message}
      }).afterClosed().subscribe(re=>{
        this.router.navigateByUrl('');
      })
    },err=>{
      this.isLoading = false;
      if(err.status === 400){
      }
    })
  }
}
