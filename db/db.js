class Movie {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
}
export let movies = [
  new Movie(0, "Star Wars", 10),
  new Movie(1, "Avengers", 8),
  new Movie(2, "The God-father", 99),
  new Movie(3, "Logan", 2),
];
export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
