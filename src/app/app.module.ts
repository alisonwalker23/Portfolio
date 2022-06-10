import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DlresumeComponent } from './dlresume/dlresume.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { GamerComponent } from './gamer/gamer.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'skills', component:SkillsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DlresumeComponent,
    HomepageComponent,
    SkillsComponent,
    GamerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
