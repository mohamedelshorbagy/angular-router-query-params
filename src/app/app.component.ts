import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs-compat/add/operator/delay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  public queryParamSubscription: Subscription;
  public routerSubscription: Subscription;
  public filterText: string;
  public status: string = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams
      .delay(10)
      .subscribe((query) => {
        this.filterText = (query['search'] || "");
        this.status = (query['status'] || "");
      })
  }


  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
    this.filterText = '';
    this.status = '';
  }


  handelFilter() {
    this.presistFilterToRoute();
  }


  presistFilterToRoute() {
    let filterParams = {
      search: this.filterText,
      status: this.status
    }
    if (!this.filterText) {
      delete (filterParams.search);
    }
    if (!this.status) {
      delete (filterParams.status)
    }
    this.router.navigate([],
      {
        queryParams: filterParams,
        relativeTo: this.route
      }
    )
  }


  changeSelect(event) {
    this.status = event;
    this.presistFilterToRoute();
  }

}
