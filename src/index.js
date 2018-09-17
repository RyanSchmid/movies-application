"use strict";


// ##### INITIAL GET REQUEST & LOADING MOVIES ##### //
function getMovies() {
    $.get('/api/movies')
        .then( $('#welcome').text("Loading..."))
        .done(function (movies, status, jqXhr) {
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

// ##### RENDER MOVIES ##### //
function renderMovies(movies) {
    let newHtml = '';
    movies.forEach(function (movie) {
        newHtml += `<tr><td>${movie.title}</td><td>${movie.rating}</td><td><button id ="edit${movie.id}">Edit</button><button id ="delete${movie.id}">Delete</button></td>`
        });
    return newHtml;
}



// ###### DELETE MOVIES ##### //
// function deleteMovies(item) {
//     return fetch ('/api/movies' + '/' + item, {
//         method: 'delete'
//     })
//         .then(response => $('#insertMovies').html(renderMovies(response.json())))
// }



// ###### ADD MOVIES ##### //

// const form = document.getElementById('addMovieForm');
// form.addEventListener('submit', addMovie);

// const url = '/api/movies'
// let inputTitle = $("#inputTitle").val()
// let inputRating = $("#inputRating").val()
// let inputId = 6
// let addedMovie = {'title': `${inputTitle}`, 'rating': `${inputRating}`, 'id': `${inputId}`};


const addMovie = {
    function() {
        event.preventDefault();
        $.ajax({
            url: '/api/movies',
            type: "POST",
            data: {
                "title": $("#inputTitle").val(),
                "rating": $("#inputRating").val()
            }
        })
            .then($('#welcome').text("Loading..."))
            .done(function (data, status, jqXhr) {
                console.log(data);
                $('#welcome').text("Movie Time!")
                $('#insertMovies').html(renderMovies(data));
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            });

    }
};

// document.getElementById('addMovie').addEventListener("click", addMovie);






// fetch(url, )
//     .then(movies => {return movies.json()})
//     .then(res => {console.log(res)}
//     .catch(error => {console.log(error)}



//     $.ajax({
//         url: "/users",
//         type: "POST",
//         data: {
//             title:  $('#inputTitle').val(),
//             rating: $('#inputRating').val()
//     }
// }).done(function(data) {
//     // do something with the data
// });


// // ###### DOM EVENT TRIGGERS ##### //
// document.getElementById('deleteMovie').addEventListener("click", deleteMovies());



// Allow users to edit existing movies: Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads,
// instead your javascript code should make an ajax request when the form is submitted.


// Delete movies: Each movie should have a "delete" button
// When this button is clicked, your javascript should send a DELETE request



