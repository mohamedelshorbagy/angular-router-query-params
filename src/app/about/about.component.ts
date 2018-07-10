import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/delay';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  public queryParamSubscription: Subscription;
  public filterText: string;
  public status: string;
  constructor(
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
  }

}
