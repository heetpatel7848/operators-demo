import { Component, OnInit } from '@angular/core';
import { Subscription, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { OperatorService } from '../service/operator.service';
import { DesignUtilityService } from '../service/design-utility.service';

@Component({
  selector: 'app-mergemap-operator',
  templateUrl: './mergemap-operator.component.html',
  styleUrls: ['./mergemap-operator.component.scss']
})
export class MergemapOperatorComponent implements OnInit {


  getData(data: string) {
    return of(data + ' video uploaded');
  }

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    source.pipe(
      mergeMap(res => this.getData(res),

      )
    ).subscribe(res => {
      console.log(res);
      this.du.print(res, 'elContainer3')
    })


  }



}


