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
import { StoreModule, MetaReducer } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';
import { authReducer } from './reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
   MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
   MatMenuModule, MatProgressSpinnerModule, MatColumnDef, MatHeaderCellDef, MatOptionModule,
    MatSelectModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatTabsModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AtheleteListComponent } from './athelete-list/athelete-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UpdateComponent } from './update/update.component';
import { EditAthleteComponent } from './edit-athlete/edit-athlete.component';
import { AssignTrainingComponent } from './assign-training/assign-training.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { StatisticsComponent } from './statistics/statistics.component';
import { PlotlyModule } from 'angular-plotly.js';
import { SimpleGraphComponent } from './simple-graph/simple-graph.component';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';



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
    AthleteDetailComponent,
    MainNavComponent,
    AtheleteListComponent,
    UpdateComponent,
    EditAthleteComponent,
    AssignTrainingComponent,
    StatisticsComponent,
    SimpleGraphComponent,
    StatisticsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDatepickerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTabsModule,
    PlotlyModule,
      StoreModule.forRoot({
      post: postReducer, auth: authReducer

    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),

  ],
  providers: [AuthGuard, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
