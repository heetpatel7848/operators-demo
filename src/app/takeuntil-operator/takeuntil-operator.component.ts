import { Component } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-takeuntil-operator',
  templateUrl: './takeuntil-operator.component.html',
  styleUrls: ['./takeuntil-operator.component.scss']
})
export class TakeuntilOperatorComponent {
  constructor(private operatorService: OperatorService) { }

  subscription: Subscription[] = [];
  results: number[] = [];


  takeuntil() {
    this.subscription.push(this.operatorService.takeUntil().subscribe(res => {
      this.results.push(res);
      console.log(res);

    }))
  }
}
