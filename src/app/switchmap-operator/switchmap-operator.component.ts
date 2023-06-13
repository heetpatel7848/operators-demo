import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../service/design-utility.service';
import { OnSameUrlNavigation } from '@angular/router';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap-operator',
  templateUrl: './switchmap-operator.component.html',
  styleUrls: ['./switchmap-operator.component.scss']
})
export class SwitchmapOperatorComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }


  getData(data: string) {
    return of(data + ' video uploaded').pipe(delay(5000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //ex 1 | Map 
    source.pipe(
      map(data => this.getData(data))
    ).subscribe(res => res.subscribe(res2 => {
      //console.log(res2);
      this.du.print(res2, 'elContainer');
    }))

    //ex 2 | Map + Switch All 

    source.pipe(
      map(data => this.getData(data)),
      switchAll()
    ).subscribe(res => {
      // console.log(res);
      this.du.print(res, 'elContainer2')
    })


    //ex 3 | Map + SwitchMap 

    source.pipe(
      switchMap(data => this.getData(data))
    ).subscribe(res => {
      console.log(res);
      this.du.print(res, 'elContainer3')
    })

  }



}
