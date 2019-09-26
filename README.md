# liri-node-app (LIRI BOT)
Language Interpretation and Recognition Interface - Spotify, BandsInTown, OMDB

## What LIRI BOT does
Liri-node-app is a browser-less Node.js application. It provides instant information on songs, movies, and events with just a few search words.

## Overview
The LIRI BOT app captures user input for searching through Spotify, Bands in Town, and OMDB databases for matching songs, events, and movies, respectively. Its Javascript code is contained in a single .js file. There is a random.txt file that contains spotify search instructions, and a logfile that records the response data. 

## How to run the app
Follow these instructions for running the app:
1. Fork the repository from this link: https://github.com/AlanLeverenz/liri-node-app.
1. Open Terminal and navigate to your __liri-node-app__ repository folder.
1. Use the following syntax after the Terminal prompt:

    `$ node liri [database] [search]`

In place of [database] enter one of the following options:
* spotify-this-song
* movie-this
* concert-this
* do-what-it-says

In place of [search] enter your search word(s).

## Sample Terminal output
Here are screenshots of response data as it appears in the console.

#### spotify-this-song The Piano Has Been Drinking
./spotify-this-console.JPG

## Technologies
Here are the NPM modules, databases, console.log output, and functions used by this app:

#### NPM Modules
* node-spotify-api
* axios
* moment
* fs

#### Databases
* Spotify
* OMDB
* BandsInTown

#### Functions
* __getArtistsNames.__ Maps the artists listed in the Spotify response.
* __getMeSpotify.__ Searches for matching songs on Spotify with the user's input phrase. Items selected from the JSON response are artist(s), song name, preview URL, and album. Data appears in the console.log and is appended to a log file.
* __getMeMovie.__ Searches for matching songs on Spotify with the user's input phrase. Items selected from the JSON response are title, year, rated, IMDB rated, country, production, language, plot, actors, Rotten Tomatoes rating, and awards. Data appears in the console.log and is appended to a log file.
* __getMeEvents.__ Searches for matching songs on Spotify with the user's input phrase. Items selected from the JSON response are the venue name, location, and event date. Data appears in the console.log and is appended to a log file.
* __doWhatItSays.__ Gathers input from a text file named "random.txt." Data appears in the console.log and is appneded to a log file.
* __pick.__ A switch statement that handles each process case. The case options are: 
    * spotify-this-song
    * movie-this
    * concert-this
    * do-what-it-says
* __runThis.__ Processes the user input and calls the pick function.
* __appendLog.__ Appends the 'log.txt' file with response data.





