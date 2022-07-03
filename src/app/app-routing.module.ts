import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './courses/course-details/all-courses/all-courses.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
// import { HomeModule } from './home/home/home.component';

const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
     {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'AllCourses',
    component: AllCoursesComponent,

  },
  {
    path: 'CourseDetails',
    component: CourseDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
