import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfopreratorComponent } from './ofoprerator/ofoprerator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { combineLatest, concat } from 'rxjs';
import { ConcatWithOperatorComponent } from './concat-with-operator/concat-with-operator.component';
import { ConcatmapOperatorComponent } from './concatmap-operator/concatmap-operator.component';
import { ForkjoinOperatorComponent } from './forkjoin-operator/forkjoin-operator.component';
import { MergemapOperatorComponent } from './mergemap-operator/mergemap-operator.component';
import { SharerplayOperatorComponent } from './sharerplay-operator/sharerplay-operator.component';
import { SwitchmapOperatorComponent } from './switchmap-operator/switchmap-operator.component';
import { TakeuntilOperatorComponent } from './takeuntil-operator/takeuntil-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';

const routes: Routes = [


  { path: 'of', component: OfopreratorComponent },
  { path: 'from', component: FromOperatorComponent },
  { path: 'map', component: MapOperatorComponent },
  { path: 'concat-with', component: ConcatWithOperatorComponent },
  { path: 'concat-map', component: ConcatmapOperatorComponent },
  { path: 'fork-join', component: ForkjoinOperatorComponent },
  { path: 'merge', component: MergeOperatorComponent },
  { path: 'merge-map', component: MergemapOperatorComponent },
  { path: 'share-replay', component: SharerplayOperatorComponent },
  { path: 'switch-map', component: SwitchmapOperatorComponent },
  { path: 'take-until', component: TakeuntilOperatorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
