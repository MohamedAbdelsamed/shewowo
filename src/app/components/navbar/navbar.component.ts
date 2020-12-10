import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {TranslateService} from '@ngx-translate/core';
import Uikit from 'uikit';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { ApiService } from './../../services/api.service';
import { url } from './../../../assets/backend/api';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  // variables
  url = url;
  
  @Input('middleNavOnly') middleNavOnly:boolean = true;
  
  direction: string;
  lang: string;
  isArabic: boolean;
  openSearch = false;
  navOpacity = false;
  navData = [];

  activeCategory = [];
  activeIndex = 0;

  constructor( private language: LanguageService,
               private translate: TranslateService, 
               private api: ApiService,
               private route: ActivatedRoute,
               private router: Router
               ) {
  }

  ngOnInit() {
    this.router.url
    // this.direction = this.language.direction;
    this.lang = this.language.language;
    this.translate.setDefaultLang(this.lang);
    this.lang === 'ar' ? this.isArabic = true : this.isArabic = false;
    this.resizing();

    Uikit.offcanvas('#offcanvas-slide', {flip: this.isArabic});
    this.getNavData();
  }

  private getNavData(){
    this.api .getNavData().subscribe(res=>{
      this.navData = res;
      this.activeCategory = this.navData[0];
      
    })
  }

  toggleDirection() {
    // console.log(this.route['_routerState'].snapshot.url);
    this.language.toggleLang();
    this.direction = this.language.direction;
    this.switchLang();
  }

  switchLang() {
    if (this.lang === 'ar') {
      this.language.language = 'en';
      this.lang = this.language.language;
      this.translate.use(this.lang);
      console.log(this.lang);
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


}

