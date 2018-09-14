"use strict";
// get() function: https://developers.google.com/web/fundamentals/primers/promises //
// function get(url) {
//     $('#welcome').text('The page is loading!')
//     // Return a new promise.
//     return new Promise(function (resolve, reject) {
//         // Do the usual XHR stuff
//         var req = new XMLHttpRequest();
//         req.open('GET', url);
//         $('#welcome').text('Movie Time!')
//         req.onload = function () {
//             // This is called even on 404 etc so check the status
//             if (req.status == 200) {
//                 // Resolve the promise with the response text
//                 resolve(req.response);
//             }
//             else {
//                 // Otherwise reject with the status text
//                 // which will hopefully be a meaningful error
//                 reject(Error(req.statusText));
//             }
//         };
//         // Handle network errors
//         req.onerror = function () {
//             reject(Error("Network Error"));
//         };
//         // Make the request
//         req.send();
//     });
// };
// get("movies-application/db.json");




//
// let newContent ='';
//
// let newHtml = '<div>';
// newHtml += `<tr><td>${data.title}</td><td>${data.rating}</td><td><button id ="edit">Edit</button><button id ="delete">Delete</button></td></div>`
// $('#insertMovies').append(newHtml);




// ############ JS FOR MOVIES EXERCISE ########## //



// USE LOAD INVENTORY FUNCTIONALITY TO REFRESH INVENTORY onkeydown//
// $('.updateData').click(function () {
//     $.ajax('./db.json')
//         .done(function (movie, status, jqXhr) {
//             $('#insertProducts').html(renderMovies(movie));
//         })
//         .fail(function (jqXHR, textStatus, errorThrown) {
//             console.log(textStatus, errorThrown);
//         });
//     console.log('movie list refreshed');
// });


