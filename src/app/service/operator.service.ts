import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, from, concatWith, merge, interval, map, concatMap, toArray, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  ofOperator(): Observable<number> {
    let number$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    return number$;
  }

  fromOperator(): Observable<number> {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number$ = from(numberArray);
    return number$;
  }

  concatWithOperator(): Observable<number> {
    let source1$ = of(1, 3, 5, 7, 9);
    let source2$ = of(2, 4, 6, 8, 10);
    let concated$ = source1$.pipe(concatWith(source2$));
    return concated$;
  }

  mergeOperator(): Observable<number> {
    const source1$ = interval(1000);
    const source2$ = interval(2000);
    const merged$ = merge(source1$, source2$)
    return merged$;
  }

  mapOperator(): Observable<number> {
    let number$ = of(1, 2, 3, 4, 5);
    let mapped$ = number$.pipe(map((h) => h * 10));
    return mapped$;
  }

  concatMap(): Observable<string[]> {
    const srcObservable$ = of(1, 2, 3, 4, 5);
    const inrObservable$ = of('A', 'B', 'C', 'D');

    return srcObservable$.pipe(
      concatMap((value) => {
        console.log("source value ", value);
        console.log("inner observable ");
        return inrObservable$.pipe(
          map((innerValue) => `${value}${innerValue}`)
        );
      }),
      toArray()
    );
  }

  takeUntil(): Observable<number> {
    const source1$ = interval(1000);
    return source1$;
  }

}
