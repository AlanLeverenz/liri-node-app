// REQUIRE NPM STATEMENTS

require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var moment = require('moment');
var axios = require('axios');


// Spotify =================================

var spotify = new Spotify (keys.spotify);

var getArtistNames = function(artist) {
    return artist.name;
}

var getMeSpotify = function(songName) {
spotify.search( {type: 'track', query: songName},
    function(err, data) {
        if ( err ) {
            return console.log('Error occurred: ' + err);
        }
        // console.log("ARTIST NAME");
        // console.log(data.tracks.items[0].artists[0].name);

        var songs = data.tracks.items;
        for (var i=0 ; i < songs.length ; i++ ) {
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('album: ' + songs[i].album.name);
            console.log('-----------------------------------');
        }
    });
}

// OMDB ==============================

var getMeMovie = function(movieName) {

    request('http://www.omdbapi.com/?apikey=' + keys.omdbKeys.id + '&t=' + movieName + '&y=&plot=short&r=json',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

                var jasonData = JSON.parse(body);
                console.log('Title: ' + jasonData.Title);
                console.log('Year: ' + jasonData.Year);
                console.log('Rated: ' + jasonData.Rated);
                console.log('IMDB Rating: ' + jasonData.imdbRating);
                console.log('Country: ' + jasonData.Country);
                console.log('Production: ' + jasonData.Production);
                console.log('Language: ' + jasonData.Language);
                console.log('Plot: ' + jasonData.Plot);
                console.log('Actors: ' + jasonData.Actors);
                console.log('Rotten tomatoes rating: ' + jasonData.Ratings[1]["Value"]);
                console.log('Awards: ' + jasonData.Awards);
            }
    });
}

// BANDS IN TOWN =============================

var getMeEvents = function(artist) {

    request('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=' + keys.bandintownKeys.id,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

                // console.log(JSON.parse(body));
                console.log("ARTIST: " + artist);
                var concerts = JSON.parse(body);
                for (var i=0 ; i < concerts.length ; i++ ) {
                    console.log('Venue name: ' + concerts[i].venue['name']);
                    console.log('Venue location: ' + concerts[i].venue['city'] + ', ' + concerts[i].venue['country']);
                    console.log('Event date: ' + moment(concerts[i].datetime).format('MM/DD/YYYY'));

                console.log('-----------------------------------');
                } // end for
            } // end if
    }); // end request
} // end getMeEvents

    // argv.slice(3).join(" ");

// RANDOM TEXT FILE PROCESSING ==============

var doWhatItSays = function() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;
        var dataArr = data.split(',');
        if (dataArr.length == 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1){
            pick(dataArr[0]);
        }
    });
} // end doWhatItSays

// SWITCH STATEMENT PROCESSING USER ARGUMENTS ======

var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song' :
            console.log("CASE - SPOTIFY");
            // check if user entered a song
            if (functionData.length === 0) {
                getMeSpotify('The Sign') 
            }
            else { 
                getMeSpotify(functionData);
            }
            break;
        case 'movie-this' : 
            console.log("CASE - OMDB");
            // check if the user entered a movie
            if (functionData.length === 0) {
                getMeMovie('Mr. Nobody')
            } else {
                getMeMovie(functionData);
            }
            break;
        case 'concert-this' : 
            console.log("CASE - CONCERT")
            getMeEvents(functionData);
            break;
        case 'do-what-it-says' :
            console.log("CASE - GET TEXT FROM FILE")
            doWhatItSays();
            break;
        default:
            console.log('LIRI does not know that');
    }   
}

// RUN THIS FUNCTION WITH USER INPUT
var runThis = function(argOne, argTwo) {
    // console.log("RUN FUNCTION");
    pick(argOne,argTwo);
}

// PROCESS THE USER'S INPUT
runThis(process.argv[2], process.argv.slice(3).join(" "));
