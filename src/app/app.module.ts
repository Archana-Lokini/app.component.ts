import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLisComponent } from './user-lis/user-lis.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';
import { USDINRPipe } from './pipes/usdinr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserAddressComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserLisComponent,
    UserListComponent,
    StudentListComponent,
    CountryComponent,
    USDINRPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
