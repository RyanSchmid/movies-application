"use strict";
// Make an ajax request to get a listing of all the movies
// When the initial ajax request comes back,
// remove the "loading..." message and replace it with
// html generated from the json response your code receives

// LOAD MOVIE LIST TO PAGE //
// provided GET request :
// const {getMovies} = require('./api.js');
// getMovies().then((movies) => {
//     console.log('Here are all the movies:');
//     movies.forEach(({title, rating, id}) => {
//         console.log(`id#${id} - ${title} - rating: ${rating}`);
//     });
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.')
//     console.log(error);
// });


function getMovies() {
    $.get('/api/movies')
        .then( $('#welcome').text("Loading..."))
        .done(function (movies, status, jqXhr) {
            // console.log('movie data is here');
            // console.log('request status: ' + status);
            // console.log('Data returned from server:');
            console.log(movies);
            $('#welcome').text("Movie Time!")
            $('#insertMovies').html(renderMovies(movies));
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        });
    console.log('GET complete');
}
getMovies();



function renderMovies(movies) {
    let newHtml = '';
    movies.forEach(function (movie) {
        newHtml += `<tr><td>${movie.title}</td><td>${movie.rating}</td><td><button id ="edit">Edit</button><button id ="delete">Delete</button></td>`
        });
    return newHtml;
}


// Allow users to add new movies : Create a form for adding
// a new movie that has fields for the movie's title and rating

function addMovie() {
    $.post('/api/movies')
        .done(function (freshMovies) {
            let inputTitle = ($('#inputTitle').val());
            let inputRating = ($('#inputRating').val());
            let inputId = (freshMovies.length + 1);
        freshMovies.push({"title": `${inputTitle}`, "rating": `${inputRating}`, "id": `${inputId}`})
    });
}
$('#addMovie').click(addMovie());


// Allow users to edit existing movies: Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads,
// instead your javascript code should make an ajax request when the form is submitted.


// Delete movies: Each movie should have a "delete" button
// When this button is clicked, your javascript should send a DELETE request
