import { Component } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent {
  constructor(private operatorService: OperatorService) { }

  subsciption: Subscription[] = []
  results: number[] = [];

  mapoperator() {
    this.subsciption.push(this.operatorService.mapOperator().subscribe(res => {
      this.results.push(res);
      console.log(res);
    }))
  }
}
