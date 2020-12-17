import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories$ : Observable<any[]>;

  constructor(private api : ApiService, private store: StoreService) { }

  ngOnInit() {
    this.getCategoriesDetails();
  }

  private getCategoriesDetails(){
    this.categories$ = this.store.navData$;
  }
}
