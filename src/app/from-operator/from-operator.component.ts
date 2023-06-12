import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorService } from '../service/operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent {

  constructor(private operatorService: OperatorService) { }

  subsciption: Subscription[] = []
  results: number[] = [];

  fromoperator() {
    this.subsciption.push(this.operatorService.fromOperator().subscribe(res => {
      this.results.push(res);
      console.log(res);
    }))
  }
}
