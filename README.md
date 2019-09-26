# liri-node-app (LIRI BOT)
Language Interpretation and Recognition Interface - Spotify, BandsInTown, OMDB

## What LIRI BOT does
Liri-node-app is a browser-less Node.js application. It provides instant information on songs, movies, and events with just a few search words.

## Overview
The LIRI BOT app captures user input for searching through Spotify, Bands in Town, and OMDB databases for matching songs, events, and movies, respectively. Its Javascript code is contained in a single .js file. There is a random.txt file that contains spotify search instructions, and a logfile *(log.txt)* that records the response data. 

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

### Spotify

`node liri spotify-this-song lucy in the sky with diamonds`

First four results:

https://github.com/alanleverenz/liri-node-app/blob/master/images/spotify-this-console1.JPG

Last four results:

https://github.com/alanleverenz/liri-node-app/blob/master/images/spotify-this-console2.JPG

If you don't include a search term, the application will default to *The Sign*.

https://github.com/alanleverenz/liri-node-app/blob/master/images/spotify-this-insert1.JPG

https://github.com/alanleverenz/liri-node-app/blob/master/images/spotify-this-insert2.JPG

### Random text file instructions

`node liri do-what-it-says`

This input processes instructions in the random.txt file, which is to search Spotify for the song, "I Want It That Way."

https://github.com/alanleverenz/liri-node-app/blob/master/images/do-what-it-says-console.JPG

### OMDB

`node liri movie-this avatar`

https://github.com/alanleverenz/liri-node-app/blob/master/images/movie-this-console.JPG

If you don't include a search term, the application will default to *Mr. Nobody*.

https://github.com/alanleverenz/liri-node-app/blob/master/images/movie-this-insert.JPG

### BandsInTown

`node liri concert-this beach boys`

https://github.com/alanleverenz/liri-node-app/blob/master/images/concert-this-console.JPG


## Technologies
Here are this app's NPM modules, databases, functions, and sample console/writeFile output:

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

#### console.log and writeFile output

ARTIST: Beach Boys
0
Venue name: Auditorium Parco della Musica
Venue location: Roma, Italy
Event date: 09/30/2019
-----------------------------------
1
Venue name: Auditorium Teatro Manzoni
Venue location: Castel Guelfo Di Bologna, Italy
Event date: 10/01/2019
-----------------------------------
2
Venue name: Various Venues
Venue location: Norwich, United Kingdom
Event date: 10/18/2019
-----------------------------------

This project was a single-person effort. -- *Alan Leverenz*

