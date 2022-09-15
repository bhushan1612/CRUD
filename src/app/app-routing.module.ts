import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudentviewdataComponent } from './studentviewdata/studentviewdata.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:"studentview",component:StudentviewComponent},
{path:"studentform",component:StudentformComponent},
{path:"studentviewdata/:studentid",component:StudentviewdataComponent},
{path:"update/:studentid",component:UpdateComponent}];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
