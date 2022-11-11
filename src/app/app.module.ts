import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import  {BrowserAnimationsModule}from "@angular/platform-browser/animations";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { HomePageComponent } from './components/.pages-container/home-page/home-page.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { NewsComponent } from './components/news/news.component';
import { GetAConsultantComponent } from './components/get-a-consultant/get-a-consultant.component';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { OurFavoriteDoctorsComponent } from './components/our-favorite-doctors/our-favorite-doctors.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchPageComponent } from './components/.pages-container/search-page/search-page.component';
import { NotFoundPageComponent } from './components/.pages-container/not-found-page/not-found-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { AboutUsPageComponent } from './components/.pages-container/about-us-page/about-us-page.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { CounterComponent } from './components/counter/counter.component';
import { ContactUsPageComponent } from './components/.pages-container/contact-us-page/contact-us-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MapComponent } from './components/map/map.component';
import { BlogPageComponent } from './components/.pages-container/blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FooterComponent,
    AboutSectionComponent,
    HomePageComponent,
    OurServicesComponent,
    WhyChooseComponent,
    NewsComponent,
    GetAConsultantComponent,
    HeaderComponent,
    TestimonialsComponent,
    BlogComponent,
    OurFavoriteDoctorsComponent,
    SearchFormComponent,
    SearchPageComponent,
    NotFoundPageComponent,
    AboutUsPageComponent,
    WhoWeAreComponent,
    OurMissionComponent,
    CounterComponent,
    ContactUsPageComponent,
    ContactUsComponent,
    MapComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
