import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './components/.pages-container/about-us-page/about-us-page.component';
import { BlogPageComponent } from './components/.pages-container/blog-page/blog-page.component';
import { ContactUsPageComponent } from './components/.pages-container/contact-us-page/contact-us-page.component';
import { HomePageComponent } from './components/.pages-container/home-page/home-page.component';
import { NotFoundPageComponent } from './components/.pages-container/not-found-page/not-found-page.component';
import { SearchPageComponent } from './components/.pages-container/search-page/search-page.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePageComponent},
  {path:"home",component:HomePageComponent},
  {path:"search",component:SearchPageComponent},
  {path:"about-us",component:AboutUsPageComponent},
  {path:"contact-us",component:ContactUsPageComponent},
  {path:"blog",component:BlogPageComponent},
  {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
