import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {TranslateService} from '@ngx-translate/core';
import Uikit from 'uikit';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { ApiService } from './../../services/api.service';
import { baseUrl } from './../../../assets/backend/api';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  // variables
  url = baseUrl;
  
  @Input('middleNavOnly') middleNavOnly:boolean = true;
  
  direction: string;
  lang: string;
  isArabic: boolean;
  openSearch = false;
  navOpacity = false;
  navData = [];
  activeCategory = [];
  subCategories = [];

  activeIndex = 0;
  token;
  isLogged: boolean = false;
  constructor( private language: LanguageService,
               private translate: TranslateService, 
               private api: ApiService,
               private store: StoreService,
               private route: ActivatedRoute,
               private router: Router,
               private auth: AuthService
               ) {
  }

  ngOnInit() {
    this.router.url
    this.lang = this.language.language;
    this.translate.setDefaultLang(this.lang);
    this.lang === 'ar' ? this.isArabic = true : this.isArabic = false;
    this.resizing();

    Uikit.offcanvas('#offcanvas-slide', {flip: this.isArabic});
    this.getNavData();
    this.token = this.auth.getToken();
    this.checkLogin();
  }

  private getNavData(){
    this.api .getNavData().subscribe(res=>{
      this.navData = res;
      this.store.navData$.next(this.navData)
      this.activeCategory = this.navData[0];      
      this.store.getSubCategory$.next(this.activeCategory['id']);
    })
  }

  toggleDirection() {
    this.language.toggleLang();
    this.direction = this.language.direction;
    this.switchLang();
  }

  switchLang() {
    if (this.lang === 'ar') {
      this.language.language = 'en';
      this.lang = this.language.language;
      this.translate.use(this.lang);
    } else {
      this.language.language = 'ar';
      this.lang = this.language.language;
      this.translate.use(this.lang);
    }
  }

  toggleSmallSearch() {
    this.openSearch = !this.openSearch;
  }

  getRigthPart(index) {
    this.activeCategory= this.navData[index]
    this.activeIndex = index
  }

  resizing() {
    window.addEventListener('resize', () => {
      this.openSearch = false;
    });
  }

  showOpacity() {
    this.navOpacity = true;
  }

  hideOpacity() {
    this.navOpacity = false;
  }

  toggleShadow() {
    this.navOpacity = !this.navOpacity;
  }

  checkLogin(){
   if(this.auth.isTokenExpired(this.token)){
     this.isLogged = false;
   }
   else{
     this.isLogged = true;
   }
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}

