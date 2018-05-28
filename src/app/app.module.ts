import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { UserComponent } from './container/user/user.component';
import { EmployeeComponent } from './container/employee/employee.component';
import { FooterComponent } from './footer/footer.component';
const appRoute : Routes=[
  {
    path:'user', component:UserComponent, data:{ title:'user list'}
  },
  {
    path:'employee',component:EmployeeComponent,data:{title:'employee list'}
  },
  {
    path:' ',
    redirectTo:'/user',
    pathMatch:'full'
}
  
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    UserComponent,
    EmployeeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
