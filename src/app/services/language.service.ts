import {Injectable} from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  direction: string;
  defaultLang = 'ltr';
  language: string;

  constructor() {
    if (!window.localStorage.getItem('dir')) {
      window.localStorage.setItem('dir', this.defaultLang);
      this.language = 'en';
      window.localStorage.setItem('lang', this.language);
      $('body').attr('lang', this.language);
    } else {
      this.direction = window.localStorage.getItem('dir');

      if (this.direction === 'ltr') {
        $('body').attr('lang', 'en');
        this.language = 'en';
        window.localStorage.setItem('lang', this.language);
      } else {
        $('body').attr('lang', 'ar');
        this.language = 'ar';
        window.localStorage.setItem('lang', this.language);
      }
    }
  }

  // toggle between arabic and english
  toggleLang(): void {
    if (this.direction === 'ltr') {
      this.direction = 'rtl';
      $('body').attr('lang', 'ar');
      this.language = 'ar';
      window.localStorage.setItem('lang', this.language);
      window.location.reload();
      window.localStorage.setItem('dir', this.direction);
    } else {
      this.direction = 'ltr';
      $('body').attr('lang', 'en');
      this.language = 'en';
      window.localStorage.setItem('lang', this.language);
      window.location.reload();
      window.localStorage.setItem('dir', this.direction);
    }
  }
}
