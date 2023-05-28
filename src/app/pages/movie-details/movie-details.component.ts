import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private movieService: MovieApiServiceService
  ) {}

  movieDetails: any;

  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.movieService.getMovieDetails(data['id']).subscribe(
        (data: any) => {
          console.log(data);
          this.movieDetails = data;
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }
}
