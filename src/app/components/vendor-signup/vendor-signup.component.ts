import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../../services/auth.service';
import { AlertDialogComponent } from './../assets/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.scss']
})
export class VendorSignupComponent implements OnInit {
  companyFileLabel= '';
  companyFile;
  
  companyErr = false;
  idFileErr = false;
  companyFocusBefor = false;

  idFileLabel= '';
  idFile;

  isLoading = false;
  message = `Successfully Registeration, Please Wait Admin Confirm then login from this link <br> <a class="d-block text-center" href='http://dashboard.wow.ieeeshasb.org' class='link'>http://dashboard.wow.ieeeshasb.org/ </a>`

  constructor(private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openFile(target, id){

    target.disabled = true; 
      
    document.getElementById(id).click();
    
    if(id === 'company_attch' && !this.companyFile){
      this.companyErr = true
    }

    
    if(id === 'id_attch' && !this.idFile){
      this.idFileErr = true
    }

  }

  uploadFile = (imgValue , id) => {

    if(imgValue.files[0]) {
      if(id === 'company_attch'){
        this.companyErr = false;
        this.companyFile = imgValue.files[0];
        this.companyFileLabel = imgValue.files[0].name;
      } else{
        this.idFileErr =false
        this.idFileLabel = imgValue.files[0].name;
        this.idFile = imgValue.files[0]
      }
    } 
  };

  
  signup(form:object){
    this.isLoading = true;
    const sinupForm = new FormData();
    for(let key in form){
      sinupForm.append(key, form[key])
    }

    sinupForm.append('company_attch', this.companyFile)
    sinupForm.append('id_attch', this.idFile)

    this.auth.vendorSignUP(sinupForm).subscribe(res=>{
      this.isLoading = false;
      this.message = `Successfully Registeration, Please Wait Admin Confirm then login from this link <br> <span class='link'>http://dashboard.wow.ieeeshasb.org/ </span>`
      this.dialog.open(AlertDialogComponent,{
        data: {message:this.message}
      })
    },err=>{
      this.isLoading = false
      if(err.status === 400){
        // 
      }
      
    })
  }

}
