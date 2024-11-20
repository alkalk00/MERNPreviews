import data from "./Books.js";

function getBook() {
  return data;
}

//imp functions
const bookslist = getBook();

const longBookWithMovie = bookslist
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(longBookWithMovie);

const adventureBooks = bookslist
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

const titles = bookslist
  .filter((book) => book.id > 2)
  .map((book) => book.title);

console.log(titles);
