const express = require('express') // Express-Bibliothek laden
const path = require('path')// Node.js Modul für Dateipfade laden
const app = express()// Express-App erstellen

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));
//Das sagt dem Server: "Schick alle Dateien aus dem files-Ordner direkt an den Browser."
// So kommt die index.html zum Browser wenn man localhost:3000 öffnet.

// Configure a 'get' endpoint for data..
//Das definiert einen Endpoint — wenn der Browser localhost:3000/movies aufruft,
// wird diese Funktion ausgeführt. req = der eingehende Request, res = die Antwort die wir zurückschicken.
app.get('/movies', function (req, res) {
    //Ein JavaScript-Array mit 3 Objekten — unsere Filmdaten.
    const movies = [ //Array Start
        {                                  //Objekt Start
            "Title": "Titanic",
            "Released": "1997-12-19",
            "Runtime": 194,
            "Genres": ["Drama", "Romance"],
            "Directors": ["James Cameron"],
            "Writers": ["James Cameron"],
            "Actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
            "Plot": "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter...",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
            "Metascore": 75,
            "imdbRating": 8.0
        }, // Objekt ende
        {
            "Title": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "Released": "2003-07-09",
            "Runtime": 143,
            "Genres": ["Action", "Adventure", "Fantasy"],
            "Directors": ["Gore Verbinski"],
            "Writers": ["Ted Elliott", "Terry Rossio", "Stuart Beattie"],
            "Actors": ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom"],
            "Plot": "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann...",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_SX300.jpg",
            "Metascore": 63,
            "imdbRating": 8.1
        },
        {
            "Title": "The Lion King",
            "Released": "1994-06-24",
            "Runtime": 88,
            "Genres": ["Animation", "Adventure", "Drama"],
            "Directors": ["Roger Allers", "Rob Minkoff"],
            "Writers": ["Irene Mecchi", "Jonathan Roberts", "Linda Woolverton"],
            "Actors": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
            "Plot": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father...",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_SX300.jpg",
            "Metascore": 88,
            "imdbRating": 8.5
        }


    ];//Array Ende
    res.json(movies);
    //Schickt das Array als JSON an den Browser zurück. Das ist die Antwort auf den Request.
})

app.listen(3000)
//Startet den Server auf Port 3000 — daher localhost:**3000**.

console.log("Server now listening on http://localhost:3000/")

