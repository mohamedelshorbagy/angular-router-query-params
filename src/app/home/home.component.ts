import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/delay';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public filterText: string;
  public status: string;
  public queryParamSubscription: Subscription;
  items: Array<{ name: string, age: number }> = [{
    name: 'Mohamed',
    age: 12
  }, {
    name: 'Ahmed',
    age: 13
  }, {
    name: 'Mahmoud',
    age: 14
  }, {
    name: 'Nouran',
    age: 15
  }]
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams
      .delay(10)
      .subscribe((query) => {
        this.filterText = (query['search'] || "");
        this.status = (query['status'] || "name");
      })
  }


  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
  }
}
