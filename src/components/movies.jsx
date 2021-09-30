import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
class Movies extends React.Component {
    state = {
        movies: getMovies()
    }
    render() { 
        return <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                { this.state.movies.map(movie => (
                    <tr>
                        <td>{ movie.title }</td>
                        <td>{ movie.genre.name }</td>
                        <td>{ movie.numberInStock }</td>
                        <td>{ movie.dailyRentalRate }</td>
                        <td><button className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>;
    }
}
 
export default Movies;