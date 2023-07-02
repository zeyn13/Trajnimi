import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: NavBarComponent }],
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'movie-details/:id', component: MovieDetailsComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
