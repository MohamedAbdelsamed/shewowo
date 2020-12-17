import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/components/assets/alert-dialog/alert-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

export enum Actions  {
  'login',
  'forgetPassword'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isLoading = false;
  message: string = '';
  actions= Actions;
  action = Actions.login ;
  
  constructor(private auth: AuthService, 
              private dialog: MatDialog, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.setAction();
  }

  private setAction(){
     this.route.paramMap.subscribe(res=>{
      let route = res.get('action')
      if(route === 'login'){
          this.action = Actions.login;
      }else{
          this.action = Actions.forgetPassword
      }
    })
   
  }

  takeAction(form){
    if(this.action === this.actions.login){
      this.login(form);    
    } else{
      this.forgetPassword(form);
    }   
  }

  forgetPassword(form){
    console.log(form);
    
  }
  

  login(form){
    this.isLoading = true;   

    this.auth.login(form).subscribe(res=>{
      this.isLoading = false;
      localStorage.setItem('user', JSON.stringify(res));
      localStorage.setItem('token', JSON.stringify(res.token));

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
