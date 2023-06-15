import { Component, OnDestroy, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorService } from '../service/operator.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-ofoprerator',
  templateUrl: './ofoprerator.component.html',
  styleUrls: ['./ofoprerator.component.scss']
})
export class OfopreratorComponent implements OnDestroy {

  constructor(private operatorService: OperatorService, private viewContainerRef: ViewContainerRef) { }

  subscription: Subscription[] = [];
  results: number[] = [];

  ofOperator() {
    const sub = this.operatorService.ofOperator().subscribe(res => {
      this.results.push(res);
      const containerRef = this.viewContainerRef.createComponent(AlertComponent);
      containerRef.instance.alert();
      console.log(res);

      // Unsubscribe after receiving the first value
      sub.unsubscribe();
    });

    this.subscription.push(sub);
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions when the component is destroyed
    this.subscription.forEach(sub => sub.unsubscribe());
  }


}
