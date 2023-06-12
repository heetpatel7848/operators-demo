import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfopreratorComponent } from './ofoprerator/ofoprerator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcatWithOperatorComponent } from './concat-with-operator/concat-with-operator.component';
import { ConcatmapOperatorComponent } from './concatmap-operator/concatmap-operator.component';
import { ForkjoinOperatorComponent } from './forkjoin-operator/forkjoin-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { MergemapOperatorComponent } from './mergemap-operator/mergemap-operator.component';
import { SharerplayOperatorComponent } from './sharerplay-operator/sharerplay-operator.component';
import { SwitchmapOperatorComponent } from './switchmap-operator/switchmap-operator.component';
import { TakeuntilOperatorComponent } from './takeuntil-operator/takeuntil-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    OfopreratorComponent,
    NavbarComponent,
    ConcatWithOperatorComponent,
    ConcatmapOperatorComponent,
    ForkjoinOperatorComponent,
    MapOperatorComponent,
    MergemapOperatorComponent,
    SharerplayOperatorComponent,
    SwitchmapOperatorComponent,
    TakeuntilOperatorComponent,
    FromOperatorComponent,
    MergeOperatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
