import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComagneDetailsComponent } from './pages/comagne-details/comagne-details.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'projet/:id',component:ComagneDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
