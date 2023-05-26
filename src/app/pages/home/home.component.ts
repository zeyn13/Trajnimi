import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;
  hideContent = false;

  constructor(private route: Router, private service: MovieApiServiceService) {}

  ngOnInit(): void {
    if (this.route.url.includes('/movie-details')) {
      this.hideContent = true;
    }
    this.service.getMovies().subscribe(
      (data) => {
        console.log(data);
        this.movies = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  movieDetails(id: number) {
    this.route.navigateByUrl(`home/movie-details/${id}`);
  }

  // bannerData() {
  //   this.service.bannerApiData().subscribe((result) => {
  //     console.log(result, 'banner');
  //     this.bannerResult = result;
  //   });
  // }
}