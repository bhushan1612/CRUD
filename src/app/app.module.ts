import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudentserviceService } from './studentservice.service';
import { RouterModule, Routes } from '@angular/router';
import { StudentviewdataComponent } from './studentviewdata/studentviewdata.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [{path:"studentview",component:StudentviewComponent},{path:"",component:StudentformComponent},
{path:"studentviewdata/:studentid",component:StudentviewdataComponent},{path:"update/:studentid",component:UpdateComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    StudentformComponent,
    StudentviewComponent,
    StudentviewdataComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
