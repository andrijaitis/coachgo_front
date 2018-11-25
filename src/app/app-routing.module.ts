import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoachDashComponent } from './coach-dash/coach-dash.component';
import { AuthGuard } from './auth-guard';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';
import { SupportComponent } from './support/support.component';
import { AtheleteListComponent } from './athelete-list/athelete-list.component';
import { EditAthleteComponent } from './edit-athlete/edit-athlete.component';
import { AssignTrainingComponent } from './assign-training/assign-training.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AllTrainingsComponent } from './all-trainings/all-trainings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'coachdash', component: CoachDashComponent, canActivate: [AuthGuard] },
  { path: 'addathlete', component: AddAthleteComponent, canActivate: [AuthGuard] },
  { path: 'athletelist', component: AtheleteListComponent, canActivate: [AuthGuard] },
  { path: 'editAthlete/:id', component: EditAthleteComponent, canActivate: [AuthGuard]  },
  { path: 'seeall/:id', component: AllTrainingsComponent, canActivate: [AuthGuard]  },
  { path: 'assigntraining', component: AssignTrainingComponent, canActivate: [AuthGuard]  },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]  },
  { path: 'support', component: SupportComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
