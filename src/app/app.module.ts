import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';

@NgModule({
  declarations: [AppComponent, ListDataComponent],
  imports: [BrowserModule, HttpClientModule, NgbPagination],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
