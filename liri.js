require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var moment = require("moment");

var command = process.argv[2];

var query = [];

for (var i = 3; i < process.argv.length; i++) {
    query.push(process.argv[i]);
}

function liri(cmd, search) {

    if (cmd === "concert-this") {

        var artist = query.join(" ");

        var bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

        axios.get(bandsUrl).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city + ", " + response.data[i].venue.region);
                console.log(response.data[i].venue.country);
                console.log(moment(response.data[i].datetime).format('MMMM Do YYYY, h:mm a'));
                console.log("-------------------------------");
            }

            // console.log(response.data[0]);
        });

    } else if (cmd === "spotify-this-song") {

        var spotifySearch = query.join(" ");

        if (spotifySearch === "") {
            spotifySearch = "The Sign Ace of Base";
        }

        spotify.search({ type: 'track', query: spotifySearch }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log("\nSong: " + data.tracks.items[0].name);
            console.log("\nArtist: " + data.tracks.items[0].album.artists[0].name);
            console.log("\nAlbum: " + data.tracks.items[0].album.name);
            console.log("\nPreview link: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
            console.log("")

            // console.log(data.tracks.items[0]);
        });

    } else if (cmd === "movie-this") {

        var movieName = query.join(" ");

        if (movieName === "") {
            movieName = "Mr. Nobody"
        }

        var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        axios.get(movieUrl).then(function (response) {
            console.log("\nTitle: " + response.data.Title);
            console.log("\nYear: " + response.data.Year);
            console.log("\nIMDB Rating: " + response.data.Ratings[0].Value);
            console.log("\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("\nCountry: " + response.data.Country);
            console.log("\nLaguage: " + response.data.Language);
            console.log("\nPlot: " + response.data.Plot);
            console.log("\nActors: " + response.data.Actors);
            console.log("");
        });

    } else if (cmd === "do-what-it-says") {

        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }

            var txtArr = data.split(",");

            command = txtArr[0]

            for (var i = 1; i < txtArr.length; i++) {
                query.push(txtArr[i]);
            }

            liri(command, query);
        });

    } else if (cmd === "edit-text") {
        var text = process.argv[3];

        fs.writeFile("random.txt", text, function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log("random.txt has been updated.");
            }
        })
    }
}

liri(command, query);