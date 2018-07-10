import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs-compat/add/operator/delay';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
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
