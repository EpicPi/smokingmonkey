import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './Stage0/login/login.component';
import {GroupCreateComponent} from './Stage0/group-create/group-create.component';
import {LandingPageComponent} from './Stage0/landing-page/landing-page.component';
import {GroupComponent} from './Stage1/group/group.component';
import {ChatComponent} from './Stage1/chat/chat.component';
import {MoneyComponent} from './Stage1/money/money.component';
import {InfoComponent} from './Stage1/info/info.component';
import {GroupEndComponent} from './Stage1/group-end/group-end.component';
import {GroupJoinComponent} from './Stage0/group-join/group-join.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'groupCreate', component: GroupCreateComponent},
  {path: 'groupJoin', component: GroupJoinComponent},
  {path: 'landing', component: LandingPageComponent},
  {
    path: 'group', component: GroupComponent, children: [
    {path: '', redirectTo: 'chat', pathMatch: 'full'},
    {path: 'chat', component: ChatComponent},
    {path: 'money', component: MoneyComponent},
    {path: 'info', component: InfoComponent},
    {path: 'end', component: GroupEndComponent}]
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
