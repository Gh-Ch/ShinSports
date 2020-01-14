import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppRoutingModule, ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { DisplayCategoriesComponent } from './display-categories/display-categories.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FrontPageComponent } from './front-page/front-page.component';
import { MatchElementComponent } from './match-element/match-element.component';
import { AddMatchComponent } from './add-match/add-match.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    AddCategoryComponent,
    AddPlayerComponent,
    AddTeamComponent,
    DisplayTeamComponent,
    DisplayPlayerComponent,
    DisplayCategoriesComponent,
    FrontPageComponent,
    MatchElementComponent,
    AddMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ROUTING,
    MaterialModule,
    MaterialFileInputModule,
    MatIconModule,
    FlashMessagesModule.forRoot(),
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
