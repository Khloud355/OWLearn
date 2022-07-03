import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { FooterComponent } from '../footer/footer.component';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CarouselModule } from 'primeng/carousel';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'home' },
  },

];

@NgModule({
  declarations: [HomeComponent,
    AboutUsComponent, FooterComponent, CourseCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule
  ]
})
export class HomeModule { }
