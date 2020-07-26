import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CampagneComponent } from './component/campagne/campagne.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { FormComponent } from './component/form/form.component';
import { ComagneDetailsComponent } from './pages/comagne-details/comagne-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { Form2Component } from './component/form2/form2.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CampagneComponent,
    ImageSliderComponent,
    FormComponent,
    ComagneDetailsComponent,
    LoginComponent,
    Form2Component,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    NoopAnimationsModule,MatStepperModule,NgxGalleryModule ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
