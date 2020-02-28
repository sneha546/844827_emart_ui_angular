import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movie:Movie;
  constructor( protected activatedRoute: ActivatedRoute, protected movieService: MovieService,protected router:Router) 
    {    
       this.movie={
              movieId:0,  
             movieTitle:"", 
              movieDate:"", 
              movieDirector:"", 
              movieUrl:"",         
                 } 
 }
  ngOnInit(): void
 {   

   }  
addMovie() 
 {   
   this.movieService.addMovie(this.movie);  
    this.router.navigate(['/movie-list']); 
 }
}

