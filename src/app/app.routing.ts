import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './Stage0/login/login.component';
import {GroupCreateComponent} from './Stage0/group-create/group-create.component';
import {LandingPageComponent} from './Stage0/landing-page/landing-page.component';
import {GroupComponent} from './Stage1/group/group.component';
import {GroupJoinComponent} from './Stage0/group-join/group-join.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'groupCreate', component: GroupCreateComponent},
  {path: 'groupJoin', component: GroupJoinComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'group', component: GroupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
