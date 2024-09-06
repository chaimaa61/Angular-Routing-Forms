import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployesComponent } from './employes/employes.component';


const routes: Routes = [
  {path:'departments', component: DepartmentsComponent},
  {path:'employes' , component:EmployesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//array of components routing expoted
