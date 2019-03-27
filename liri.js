require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var command = process.argv[2];

if (command === "concert-this") {

    // logic for BANDS IN TOWN

} else if (command === "spotify-this-song") {

    // logic for SPOTIFY

} else if (command === "movie-this") {

    // logic for IMDB
    var movieName = process.argv.slice(3).join("+");

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function (response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Laguage: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    });

} else if (command === "do-what-it-says") {

    // logic for RANDOM.TXT

}