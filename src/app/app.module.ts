import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { SubjectListItemComponent } from './components/subject/subject-list-item/subject-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
