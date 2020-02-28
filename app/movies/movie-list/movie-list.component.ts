import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit
 {
  allMovies:Movie[];
  constructor( protected router:Router , protected movieService: MovieService )
 {
     this.allMovies=[{  
                        movieId: 101,
                        movieUrl:"https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg",
                        movieTitle:"1917",                    
                        movieDate:"30/01/2020",                   
                         movieDirector:"Sam Mendes"          
                     },                     
                     {     
                        movieId: 102,  
                        movieUrl:"https://images.firstpost.com/optimize/V__RiFcTXWjpeZvBb1Fpc9a48ic=/images.firstpost.com/wp-content/uploads/large_file_plugin/2020/02/1581066805_jaanureviewsocial.jpg",         
                         movieTitle:"jaanu",
                         movieDate:"07/02/2020",      
                          movieDirector:"Prem"    
                      },  
                      {
                          movieId: 103,  
                        movieUrl:"https://cdn.webshopapp.com/shops/2090/files/283948293/the-nun-statue-1-2-valak-114-cm.jpg",   
                       movieTitle:"The Nun",
                          movieDate:"07/09/2018",   
                       movieDirector:"Corin Hardy"    
                  },
                  { 
                         movieId: 104,
                         movieUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Panga_film_poster.jpg/220px-Panga_film_poster.jpg", 
                         movieTitle:"Panga",
                          movieDate:"24/01/2020",     
                     movieDirector:"Ashwiny Iyer Tiwari"
                   }, 
                   { 
                         movieId: 105,  
                        movieUrl:"https://static.abplive.com/wp-content/uploads/2019/08/29074330/ECevmrvU8AAnlBF.jpg?impolicy=abp_cdn&imwidth=400",  
                        movieTitle:"mission mangal", 
                         movieDate:"15/06/2019", 
                         movieDirector:"Jagan Shakti"       
                   },    
                  ]; 
  }
  ngOnInit(): void { 
     this.allMovies=this.movieService.getAllMovies(); 
 } 
 displayEditMovie(mId:number)  { 
     this.router.navigate(["/movie-edit/"+mId]); 
 } 
   displayAddMovie()  
  {    
    this.router.navigate(["/movie-add"]);
    } 
   deleteMovie(movieId:number) 
   { 
       this.movieService.deleteMovie(movieId);    
    this.allMovies=this.movieService.getAllMovies(); 
   }
}


