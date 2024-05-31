import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { MainComponent } from './main/main/main.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SchoolListComponent } from './schools/list/school-list.component';
import { NewSchoolComponent } from './schools/new/new-user/new-school.component';
import { ViewDetailsComponent } from './schools/view/view-details/view-details.component';


const routes: Routes = [
  {path: 'app-home', component: MainComponent},
  { path: '',   redirectTo: '/app-home', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'schools', component: SchoolListComponent},
  {path: 'login', component: LoginComponent},
  {path: ':id', component: ViewDetailsComponent},

  //  users
  {path: 'new-school', component: NewSchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
