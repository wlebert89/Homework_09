# Liri Node App

### Overview

Liri is an app built with Node.js that takes user input from the command line and returns information using various APIs.

The user has a choice of 4 primary commands: 

  * concert-this
  * spotify-this-song
  * movie-this
  * do-what-it-says

and one secondary command:

  * edit-text

### concert-this

If "concert-this" is typed into the command line, followed by an artist name, Liri will search the Bands In Town database and return a list of all the venues that particular artist is playing, including the city/state, country, date, and time of each concert.

### spotify-this-song

If "spotify-this-song" is called, followed a song title, Liri will search the Spotify API and return information about that song, including the artist(s), the ablum it appears on, and a preview link. If the user does not input a song when running this command, Liri will default to "The Sign" by Ace of Base.

### movie-this

If "movie-this" keyword is called, followed by a movie name, Liri will search the OMBD API and return information about the movie, including the year it was released, the IMDB rating, Rotten Tomatoes rating, country, language(s), plot, and actors. If the user does not input a movie when running this command, Liri will default to Mr. Nobody.

### do-what-it-says & edit text

And if "do-what-it-says" is called, Liri will use the text written in the random.txt file as it's own set of commands. The user may run the "edit-text" command to edit the text in random.txt. For example, if the user ran 'Node Liri edit-text "movie-this,gladiator"', and then ran 'Node Liri do-what-it-says', Liri will use "movie-this" as it's keyword commmand, and "gladiator" as it's movie search term. It will then search the OMDB API and return information about the movie Gladiator.

### demo video

A screen recording of Liri in action is available in the "app_demo" folder.