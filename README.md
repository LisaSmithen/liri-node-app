# liri-node-app

liri-node-app
 (LIRI Bot) Assignment
The assignment was to use Node JS to create a LIRI bot, similar to that of the Siri. while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
Getting Started
•	Clone down repo.
•	Run command 'npm install' in Terminal or GitBash
•	Run command 'node liri.js' or one of the commands shown below.
What Each Command Does
•	node liri.js concert-this <artist/band name here>
This will search the Bands in Town Artist Events API
o	Name of the venue
o	Venue location
o	Date of the Event (use moment to format this as "MM/DD/YYYY")
•	node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
o	Artist(s)
o	The song's name
o	A preview link of the song from Spotify
o	The album that the song is from

•	node liri.js movie-this '<movie name here>'
Title of the movie.
o	Year the movie came out.
o	IMDB Rating of the movie.
o	Rotten Tomatoes Rating of the movie.
o	Country where the movie was produced.
o	Language of the movie.
o	Plot of the movie.
o	Actors in the movie.
•	node liri.js do-what-it-says
o	It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
o	Edit the text in random.txt to test out the feature for movie-this and concert-this.

Built Using
•	Visual Studio Code
https://github.com/LisaSmithen/liri-node-app.git
