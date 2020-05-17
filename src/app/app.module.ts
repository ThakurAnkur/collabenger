import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { appRouterModule } from './app.routes';
import { AuthenticationService } from './services/authentication.service'
import { SearchService } from './services/search.service'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    MessagePanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouterModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [AuthenticationService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
