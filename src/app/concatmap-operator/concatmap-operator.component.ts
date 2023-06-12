import { Component, Input } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-concatmap-operator',
  templateUrl: './concatmap-operator.component.html',
  styleUrls: ['./concatmap-operator.component.scss']
})
export class ConcatmapOperatorComponent {
  constructor(private operatorService: OperatorService) { }

  subscription: Subscription[] = [];
  results: any[] = [];


  concatmap() {
    this.subscription.push(this.operatorService.concatMap().subscribe(res => {
      this.results = this.results.concat(res);
      console.log(res);
    }));
  }

}
