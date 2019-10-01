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
