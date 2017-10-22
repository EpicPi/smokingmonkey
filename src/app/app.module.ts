import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Stage0/login/login.component';
import { LandingPageComponent } from './Stage0/landing-page/landing-page.component';
import {FirebaseService} from './Services/firebase.service';
import {LoginService} from './Services/login.service';
import {GroupComponent } from './Stage1/group/group.component';
import {GroupCreateComponent} from './Stage0/group-create/group-create.component';
import {MoneyComponent} from './Stage1/money/money.component';
import {InfoComponent} from './Stage1/info/info.component';
import {GroupEndComponent} from './Stage1/group-end/group-end.component';
import {ChatComponent} from './Stage1/chat/chat.component';
import {routing} from './app.routing';
import { GroupJoinComponent } from './Stage0/group-join/group-join.component';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserService} from './Services/user.service';
import {GroupService} from './Services/group.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    GroupComponent,
    ChatComponent,
    GroupCreateComponent,
    MoneyComponent,
    InfoComponent,
    GroupEndComponent,
    GroupJoinComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    FirebaseService,
    LoginService,
    UserService,
    GroupService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
