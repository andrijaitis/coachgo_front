import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoachDashComponent } from './coach-dash/coach-dash.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './services/auth.service';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { SupportComponent } from './support/support.component';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';
import { AuthInterceptor } from 'src/interceptors/AuthInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    CoachDashComponent,
    AddAthleteComponent,
    SupportComponent,
    AthleteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
