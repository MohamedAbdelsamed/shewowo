import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from './services/language.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  direction: string;
  lang: string;
  url: string;

  constructor(private language: LanguageService, private translate: TranslateService, private toastr) {}


  ngOnInit(): void {

    this.direction = this.language.direction;
    this.lang = this.language.language;
    this.translate.setDefaultLang(this.lang);
  }

  toggleDirection() {
    // this.language.toggleLang();
    // this.direction = this.language.direction;
    // this.switchLang();
  }

  // switchLang() {
  //   if (this.lang === 'ar') {
  //     this.language.language = 'en';
  //     this.lang = this.language.language;
  //     this.translate.use(this.lang);
  //     console.log(this.lang);
  //   } else {
  //     this.language.language = 'ar';
  //     this.lang = this.language.language;
  //     this.translate.use(this.lang);
  //     console.log(this.lang);
  //   }
  // }
}
