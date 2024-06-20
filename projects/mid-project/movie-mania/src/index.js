import { movieReviewData } from "./data.js";

function movieMania() {
  const totalMovies = movieReviewData.length;
  const moviesReviewData = movieReviewData.flat();
  const totalReviews = moviesReviewData.length;
  const totalRating = moviesReviewData.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);
  const avgRating = (totalRating / totalReviews).toFixed(2);

  const totalMovieContainer = document.getElementById("idTotalMovie");
  addDynamicData(totalMovies, totalMovieContainer);

  const avgRatingContainer = document.getElementById("idAvgRating");
  addDynamicData(avgRating, avgRatingContainer);

  const totalReviewContainer = document.getElementById("idTotalReviews");
  addDynamicData(totalReviews, totalReviewContainer);

  const idMovieLists = document.querySelector("#movieListId ul");
  addReviewData(moviesReviewData, idMovieLists);
}

function addDynamicData(dynamicData, eleContainer) {
  const span = document.createElement("span");
  span.innerText = dynamicData;
  eleContainer.appendChild(span);
}

function addReviewData(moviesReviewData, idMovieLists) {
  const liElem = document.createElement("li");
  moviesReviewData.map((item) => {
    const { title, content, rating, by, on } = item;

    const titleElem = document.createElement("p");
    titleElem.innerText = `${title} - ${rating}`;
    liElem.appendChild(titleElem);

    const contentElem = document.createElement("p");
    contentElem.innerText = content;
    liElem.appendChild(contentElem);

    const byElem = document.createElement("p");
    byElem.innerText = `By ${by} on ${on}`;
    liElem.appendChild(byElem);
  });

  idMovieLists.appendChild(liElem);
}

movieMania();
