import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SecAboutComponent } from './components/sec-about/sec-about.component';
import { SecEducationComponent } from './components/sec-education/sec-education.component';
import { SecProjectsComponent } from './components/sec-projects/sec-projects.component';
import { SecSkillsComponent } from './components/sec-skills/sec-skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './routes/app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecAboutComponent,
    SecEducationComponent,
    SecProjectsComponent,
    SecSkillsComponent,
    FooterComponent,
    PortfolioComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
