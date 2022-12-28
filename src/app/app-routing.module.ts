import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { EmptyComponent } from './empty/empty.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtherMoviesComponent } from './other-movies/other-movies.component';
import { TeluguMoviesComponent } from './telugu-movies/telugu-movies.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"",component:EmptyComponent},
  {path:"Telugu-Movies",component:TeluguMoviesComponent},
  {path:"Other-Movies",component:OtherMoviesComponent},
  {path:"Login",component:LoginComponent},
  {path:"body",component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
