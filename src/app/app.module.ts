import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { FormsModule } from '@angular/forms';  // Add this if you're using forms

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    BatchListComponent
    // Add any other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule if necessary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
