require("dotenv").config();

function helpMenu() {
    console.log("\n" + "How to run the lookup commands... " + "\n" + "\n" + "A movie name(node liri.js movie-this<Movie name here>)" + "\n" + "A song name(node liri.js spotify-this-song<Song name here)" + "\n" + "A band lookup(node liri.js concert-this<artist/band name here>" + "\n" + "Do what it says(node liri.js do-what-it-says<Will do one of the three commands above depending on what is on your random.txt file>)" + "\n");
}
helpMenu();
const fs = require("fs");
var request = require("request"),
moment = require("moment"),
keys = require("./keys.js"),
Spotify = require('node-spotify-api'),
spotify = new Spotify({
    id: "974a6303de3b438a96b52d84affdd367",
    secret: "6e5cb16fc12440ee96456db5eaef73ef"
});

infoInput = process.argv,
action =process.argv[2],
param = "";

if (!action || !infoInput || !infoInput.length) {
    process.exit(1);
};

if (process.argv[3] !== undefined) {
    for (i =3; i < infoInput.length; i++) {
        param +=infoInput[i] + "";
    };
 };
 switch (action) {
    case 'concert-this':
        if (!param || param.length < 2) {
            param = "NF";
        }
        concertThis(param);
        break;

     case 'spotify-this song':
         if (!param || param.length < 2) {
             param = "Speak To A Girl";
         }   
         spotifyThis(param);
         break;

     case "movie-this":
         if (!param || param.length < 2) {
             param = "The Hate You Give";
         }
         MSPointerEvent(param);
         break;

     case "do-what-it-says":
         var command = "movie";
         if (process.argv[3] !== undefined) {
             command = process.argv [3];
         }
         doWhatItSays(command);
         break;
         };

function movie(title) {
    var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&3f2d0f47=trilogy";
    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            if (body) {
                var data = JSON.parse(body);
                if (data.Error == 'Movie not found!') {
                    var noMovie = ("\n**********************Sorry NO MOVIE***************************\nOMDB could not find any movies that matched that title.  Please try again.\n********************************************************************************\n");
                    console.log(noMovie)
                    fs.appendFile("log.txt", noMovie, function (err) {
                        if (err) {
                            return console.log("Movie data did not append to log.txt file.");
                        };
                    });
                } else if (!data.Ratings || data.Ratings.length < 2) {
                    logMovie(data); 

                    return
                } else if (data.Ratings[1].Value !== undefined) {
                    var movieAppend = ("\n********************************** MOVIE THIS **********************************\nTitle: " + data.Title + "\nRelease Year: " + data.Year + "\nIMDB Rating: " + data.imdbRating + "\nRotten Tomatoes Rating: " + data.Ratings[1].Value + "\nCountry movie produced in: " + data.Country + "\nLanguage: " + data.Language + "\nPlot: " + data.Plot + "\nActors: " + data.Actors + "\n********************************************************************************\n");
                    console.log(movieAppend)
                    fs.appendFile("log.txt", movieAppend, function (err) {

                    });
                };
            };
        };

    });
};

function logMovie(data) {
    var movieAppend = "\n********************************** MOVIE **********************************\nTitle: " + data.Title;


    if (data.Year)
        movieAppend = movieAppend + "\nRelease Year: " + data.Year;
    else
        movieAppend = movieAppend + "\nRelease Year: No release year";

    if (data.imdbRating)
        movieAppend = movieAppend + "\nIMDB Rating: " + data.imdbRating;
    else
        movieAppend = movieAppend + "\nIMDB Rating: No Rating";

    if (data.Country)
        movieAppend = movieAppend + "\nRotten Tomatoes Rating: No Rotten Tomatoes Rating\nCountry movie produced in: " + data.Country;
    else
        movieAppend = movieAppend + "\nRotten Tomatoes Rating: No Rotten Tomatoes Rating\nCountry movie produced in: N/A";

    if (data.Language)
        movieAppend = movieAppend + "\nLanguage: " + data.Language;
    else
        movieAppend = movieAppend + "\nLanguage: N/A";

    if (data.plot)
        movieAppend = movieAppend + "\nPlot: " + data.Plot;
    else
        movieAppend = movieAppend + "\nPlot: N/A";
    if (data.Actors)
        movieAppend = movieAppend + "\nActors: " + data.Actors;
    else
        movieAppend = movieAppend + "\nActors: N/A";

    movieAppend = movieAppend + "\n********************************************************************************\n";
    console.log(movieAppend)
    fs.appendFile("log.txt", movieAppend, function (err) {
        if (err){
            return console.log("Movie data did not connect to log.txt file.");
        };
        });
    }