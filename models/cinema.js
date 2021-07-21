const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.filmList = function(film){
  const result = this.films.map((film) => {
    return film.title
  });
  return result;
};

Cinema.prototype.filmByTitle = function(title){
  return this.films.find((film) => {
    return film.title === title
  });
};

Cinema.prototype.filterByGenre = function(genre){
  return this.films.find((film) => {
    return film.genre === genre
  });
};






module.exports = Cinema;