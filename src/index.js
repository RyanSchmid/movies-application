"use strict";

// ##### INITIAL GET REQUEST & LOADING MOVIES ##### //
// function getMovies() {
//     $.get('/api/movies')
//         .then( $('#welcome').text("Loading..."))
//         .done(function (movies, status, jqXhr) {
//             console.log(movies);
//             $('#welcome').text("Movie Time!")
//             $('#insertMovies').html(renderMovies(movies));
//         })
//         .fail(function (jqXHR, textStatus, errorThrown) {
//             console.log(textStatus, errorThrown);
//         });
//     console.log('GET complete');
// }
// getMovies();

// ##### RENDER MOVIES ##### //
function renderMovies(movies) {
    let newHtml = '';
    movies.forEach(function (movie) {
        newHtml += `<tr><td>${movie.title}</td>
                    <td>${movie.rating}</td>
                    <td><button class="edit" data-id="${movie.id}">Edit</button>
                    <button class="delete" data-id ="${movie.id}">Delete</button></td></tr>`
    });
    // return newHtml;
    return (newHtml);
}


function getMovies() {
    const url = '/api/movies/'
    let contentPromise = fetch(url);
    contentPromise.catch(error => {
        console.log(error)
    });
    contentPromise.then(response => {
        response.json().then(data => {
            console.log(data);
            $('#insertMovies').html(renderMovies(data));
        })
            .catch(error => {
                console.log(error)
            })
    });
}

getMovies();


// ###### DELETE MOVIES ##### //
// const deleteMovie = {
//     function() {
//         event.preventDefault();
//         $.ajax({
//             url: '/api/movies',
//             type: "DELETE"
//         })
//             .then($('#welcome').text("Loading..."))
//             .done(function (data, status, jqXhr) {
//                 console.log(data);
//                 $('#welcome').text("Movie Time!")
//                 $('#insertMovies').html(renderMovies(data));
//             })
//             .fail(function (jqXHR, textStatus, errorThrown) {
//                 console.log(textStatus, errorThrown);
//             });
//
//     }
// };


// const editMovies = (data, id) => {
//     return fetch(`/api/movies/${id}`, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {'Content-Type': 'application/json'},
//     }).then(
//         response => console.log('Success: ' + JSON.stringify(response)))
//         .catch(error => console.log('Fail: ' + JSON.stringify(error)))
// };


//###### ADD MOVIES ##### //


function addMovie() {
    let data = {};
    data.title = $("#inputTitle").val();
    data.rating = $("#inputRating").val();
    let addContentPromise = fetch('/api/movies/', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });
    addContentPromise.catch(error => {
        console.log(error)
    });
    addContentPromise.then(response => getMovies());
};


let deleteButtons = document.querySelectorAll(".delete");
deleteButtons = Array.from(deleteButtons);

deleteButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        let id = event.target.getAttribute("data-id");
        //with edit

        let url = "api/movies/" + id;
        fetch(url, {
            method: "DELETE",
        }).then(response => getMovies())
    })
});

// let editButtons = document.querySelectorAll(".edit");
// editButtons = Array.from(editButtons);
//
// editButtons.forEach(button => {
//     button.addEventListener('click', function(event) {
//         event.preventDefault();
//         let id = event.target.getAttribute("data-id");
//         //with edit
//
//         let url = "api/movies/" + id;
//         let data = {};
//         // data.title =
//         // data.rating =
//
//         fetch(url, {
//             method:POST,
//             body: JSON.stringify(data),
//             headers: {'Content-Type': 'application/json'}
//         })
//
//     })
//     }



// ###### EDIT MOVIES ##### //
// const editMovie = {
//     function() {
//         event.preventDefault();
//         $.ajax({
//             url: '/api/movies',
//             type: "PUT",
//             data: {
//                 "title": $("#inputTitle").val(),
//                 "rating": $("#inputRating").val()
//             }
//         })
//             .then($('#welcome').text("Loading..."))
//             .done(function (data, status, jqXhr) {
//                 console.log(data);
//                 $('#welcome').text("Movie Time!")
//                 $('#insertMovies').html(renderMovies(data));
//             })
//             .fail(function (jqXHR, textStatus, errorThrown) {
//                 console.log(textStatus, errorThrown);
//             });
//
//     }
// };


document.getElementById('addMovie').addEventListener("click", function (event) {
    event.preventDefault();
    addMovie();
});
// document.getElementById('deleteMovie').addEventListener("click", deleteMovie);


// const form = document.getElementById('addMovieForm');
// form.addEventListener('submit', addMovie);


// let inputId = 6
// let addedMovie = {'title': `${inputTitle}`, 'rating': `${inputRating}`, 'id': `${inputId}`};


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



