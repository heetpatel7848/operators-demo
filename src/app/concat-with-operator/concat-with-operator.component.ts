import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorService } from '../service/operator.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-concat-with-operator',
  templateUrl: './concat-with-operator.component.html',
  styleUrls: ['./concat-with-operator.component.scss']
})
export class ConcatWithOperatorComponent {

  constructor(private operatorService: OperatorService, private viewRef: ViewContainerRef) { }

  @ViewChild('dynamic', { read: ViewContainerRef })

  subscription: Subscription[] = [];
  results: number[] = [];


  concatWith() {
    this.subscription.push(this.operatorService.concatWithOperator().subscribe(res => {
      this.results.push(res);
      console.log(res);

    }))
  }

  showDynamicComponent() {
    this.viewRef.clear();
    this.viewRef.createComponent(AlertComponent);
  }

  removeDynamicComponent() {
    this.viewRef.clear();
  }
}