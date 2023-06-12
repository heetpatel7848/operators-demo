import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorService } from '../service/operator.service';

@Component({
  selector: 'app-ofoprerator',
  templateUrl: './ofoprerator.component.html',
  styleUrls: ['./ofoprerator.component.scss']
})
export class OfopreratorComponent {

  constructor(private operatorService: OperatorService) { }

  subscription: Subscription[] = [];
  results: number[] = [];


  ofOperator() {
    this.subscription.push(this.operatorService.ofOperator().subscribe(res => {
      this.results.push(res);
      console.log(res);

    }))
  }

}
