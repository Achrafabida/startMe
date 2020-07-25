import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CampagneComponent,
    ImageSliderComponent,
    FormComponent,
    ComagneDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
