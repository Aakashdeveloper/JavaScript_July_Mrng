literal notation
constructor notation

/////////////////////
Literal notation
///////////////////

var moviename = "avenger"
var movierating = 8
var movielang = "eng"

var movies = {
    name:'Avngers',
    rating:8,
    lang:'eng'
}

var movies = {
    name:'Avngers',
    rating:8,
    lang:'eng'
}
undefined
movies
{name: "Avngers", rating: 8, lang: "eng"}
movies.name
"Avngers"
movies.lang
"eng"
movies["rating"]
8
movies.genere="Action"
"Action"
movies
{name: "Avngers", rating: 8, lang: "eng", genere: "Action"}
movies.rating=9
9
movies
{name: "Avngers", rating: 9, lang: "eng", genere: "Action"}
delete movies.lang
true


JSON> JavaScript Object notation

var movies=[
    {
        name:'Avngers',
        rating:8,
        lang:'eng'
    },
    {
        name:'Mad Max',
        rating:4.4,
        lang:'eng'
    }
]
undefined
movies[0].name
"Avngers"
movies[1].name
"Mad Max"