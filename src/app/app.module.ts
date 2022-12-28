import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TeluguMoviesComponent } from './telugu-movies/telugu-movies.component';
import { OtherMoviesComponent } from './other-movies/other-movies.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmptyComponent } from './empty/empty.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeluguMoviesComponent,
    OtherMoviesComponent,
    BodyComponent,
    LoginComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
