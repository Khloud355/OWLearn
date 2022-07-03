import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllCoursesComponent } from './courses/course-details/all-courses/all-courses.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllCoursesComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
