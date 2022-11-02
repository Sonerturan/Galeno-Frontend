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
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { HomePageComponent } from './components/.pages-container/home-page/home-page.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { NewsComponent } from './components/news/news.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { GetAConsultantComponent } from './components/get-a-consultant/get-a-consultant.component';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FooterComponent,
    BookingFormComponent,
    AboutSectionComponent,
    HomePageComponent,
    OurServicesComponent,
    WhyChooseComponent,
    NewsComponent,
    OurTeamComponent,
    GetAConsultantComponent,
    HeaderComponent,
    TestimonialsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
