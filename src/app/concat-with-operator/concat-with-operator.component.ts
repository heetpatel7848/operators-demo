import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorService } from '../service/operator.service';

@Component({
  selector: 'app-concat-with-operator',
  templateUrl: './concat-with-operator.component.html',
  styleUrls: ['./concat-with-operator.component.scss']
})
export class ConcatWithOperatorComponent {

  constructor(private operatorService: OperatorService) { }

  subscription: Subscription[] = [];
  results: number[] = [];


  concatWith() {
    this.subscription.push(this.operatorService.concatWithOperator().subscribe(res => {
      this.results.push(res);
      console.log(res);

    }))
  }
}
