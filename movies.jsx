import React, { Component } from 'react';
import { getMovies } from '../src/services/fakeMovieService';
import StarRating from './StarRating';

class Movies extends Component {
    state = {
        movies: getMovies()
    };

       render() {
       

       
        
        return (
            <React.Fragment>
                <p>Belle's Movie Lists </p>
        <table className="table">    
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Synopsis</th>
                    <th></th>
                    <th>Rating</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (  
                <tr key={movie._id}>
                    <td><img className='poster' src={movie.image}></img></td>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.Synopsis}</td>
                    <td></td>
                    <td>How do you rate this movie?{<StarRating />}</td>
                    <td> </td>
                    
                </tr>               
                ))}
                
            </tbody>
        </table>


            </React.Fragment>
        )
        
    }
}

export default Movies;
