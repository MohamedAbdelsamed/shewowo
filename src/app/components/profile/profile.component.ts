import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


export interface ProfileData{
  active?: number
  created_at?: string
  email?: string
  email_verified_at?: string
  first_name?: string
  id?: number
  last_name?: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  profileData: ProfileData = {};
  first_name: string;
  last_name: string;
  email: string;
  oldPassword:number;
  newPassword:number;
  constructor(
    private api: ApiService) { }


  ngOnInit() {
    this.getProfile();
    
  }

  private getProfile(){
    this.api.getProfile().subscribe(res=>{
      this.profileData = res
     this.first_name = this.profileData.first_name;
     this.last_name = this.profileData.last_name;
     this.email = this.profileData.email;
    })
  }

  updateProfile(){
    this.api.updateName({first_name: this.first_name, last_name: this.last_name})
     .subscribe(res=>{});    
  }

  changePassword(){
    console.log("password")
    this.api.changPassword({password: this.oldPassword,new_password:this.newPassword}).subscribe(x =>{
      console.log("password", x)
    })

  }
  
}
