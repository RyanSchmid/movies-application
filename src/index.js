/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
export default (name) => console.log(`Hello there, ${name}!`);

// On page load: Display a "loading..." message


window.onload = function() {
    $('#welcome').text('The page is loading!');
}



// Make an ajax request to get a listing of all the movies





// When the initial ajax request comes back,
// remove the "loading..." message and replace it with
// html generated from the json response your code receives



module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    }
};


const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});




// Allow users to add new movies : Create a form for adding
// a new movie that has fields for the movie's title and rating




// When the form is submitted, the page should NOT
// reload / refresh, instead, your javascript should
// make a POST request to /api/movies with the information
// the user put into the form




// Allow users to edit existing movies: Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
//Like creating a movie, this should not involve any page reloads,
// instead your javascript code should make an ajax request when the form is submitted.







// Delete movies: Each movie should have a "delete" button
// When this button is clicked, your javascript should send a DELETE request



// ############ JS FROM TOOL EXERCISE ########## //
'use strict';

// GET INITIAL INVENTORY:  Create an ajax GET request for /data/inventory.json//
$.ajax('data/inventory.json');


// CREATE HTML FROM JSON TABLE //
// Take the data from inventory.json and append it to the products table //
// HINT: Your data should come back as a JSON object; use console.log() to inspect its contents and fields //
// HINT: You will want to target #insertProducts for your new HTML elements //
function renderTool(tool) {
    var html = '<tr>';
    html += '<td>' + tool.title + '</td>';
    html += '<td>' + tool.quantity + '</td>';
    html += '<td>' + tool.price + '</td>';
    html += '<td>' + tool.categories.join(", ") + '</td>';
    return html;
}
function renderTools(tools) {
    var html = '';
    for (var i = tools.length - 1; i >= 0; i--) {
        html += renderTool(tools[i]);
    }
    return html;
}
// EXAMPLE //
// data.forEach(function(tool, i){
//   var html = '<tr>';
//   html += '<td>' + tool.title + '</td>';
//   html += '<td>' + tool.quantity + '</td>';
//   html += '<td>' + tool.price + '</td>';
//   html += '<td>' + tool.categories.join(", ") + '</td>';
//   html += "</tr>";
//   $("#insertProducts").append(html)
// })


// LOAD INVENTORY TO PAGE//
$(function() {
    $.get('data/inventory.json')
        .done(function (tool, status, jqXhr) {
            // console.log('tool data is here');
            // console.log('request status: ' + status);
            // console.log('Data returned from server:');
            // console.log(tool);
            $('#insertProducts').html(renderTools(tool));
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        });
    console.log('GET complete');
});


// USE LOAD INVENTORY FUNCTIONALITY TO REFRESH INVENTORY WITH BUTTON //
$('#updateInventory').click(function () {
    $.ajax('data/inventory.json')
        .done(function (tool, status, jqXhr) {
            $('#insertProducts').html(renderTools(tool));
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        });
    console.log('inventory refreshed');
});