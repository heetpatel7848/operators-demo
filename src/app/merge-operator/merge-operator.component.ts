import { Component } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.scss']
})
export class MergeOperatorComponent {
  constructor(private operatorService: OperatorService) { }

  subscription: Subscription[] = [];
  results: number[] = [];


  merge() {
    this.subscription.push(this.operatorService.mergeOperator().subscribe(res => {
      this.results.push(res);
      console.log(res);

    }))
  }
}
