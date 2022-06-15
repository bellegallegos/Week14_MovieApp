import * as genresAPI from "./fakeGenreService";

// <input type="file" accept={{movies[0].image}} multiple />

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    image: "https://m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA@@._V1_.jpg",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    Synopsis: 'A cyborg assassin known as a Terminator travels from 2029 to 1984 to kill Sarah Connor. Sarah is targeted because her unborn son will lead the fight against Skynet.',
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Edge of Tomorrow",
    image: 'https://m.media-amazon.com/images/I/91HbAz10cjL._AC_UY436_FMwebp_QL65_.jpg',
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    Synopsis: "A soldier in an alien war gets caught in a time loop."
    
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    image: 'https://m.media-amazon.com/images/I/51TfUWh5N9L.jpg',
    title: "Inception",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    Synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
   
   
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    image: 'https://m.media-amazon.com/images/I/91BAMbEQHKL._AC_UY436_FMwebp_QL65_.jpg',
    title: "Dr. Strange",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Action" },
    Synopsis: "A world-famous neurosurgeon seeking a cure finds powerful magic in a mysterious place known as Kamar-Taj the front line of a battle against unseen dark forces bent on destroying our reality.",
   
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    image: 'https://m.media-amazon.com/images/I/91k8IK1a95L._AC_UY436_FMwebp_QL65_.jpg',
    title: "The Invisible Man",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Suspense" },
    Synopsis: "A woman fears she is being hunted by the unseen presence of her abusive ex-husband.",
    
   
  },
  
  
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
