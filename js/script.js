"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Где моя тачка",
      "Ла-ла лэнд",
      "Чужой",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    // newFilmButton = document.querySelector("button"),
    // addNewFilm = document.querySelector(".adding__input"),
    chkBox = document.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = chkBox.checked;
    //const valLength = newFilm.length;

    event.target.reset();

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 3)}...`;
      }
      if (favourite) {
        console.log("Add favourite film");
      }
      movieDB.movies.push(`${newFilm}`);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
      // } else if (newFilm && valLength >= 21) {
      //   movieDB.movies.push(`${newFilm.slice(0, 3)}...`);
      //   sortArr(movieDB.movies);
      //   createMovieList(movieDB.movies, movieList);
      // } else {
      //   alert("You are input smth wrong");
    }
  });

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">  ${
        i + 1
      } ${film}
  <div class="delete"></div>
</li> `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }
  const deleteAdv = (arr) => {
    adv.forEach((element) => {
      element.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "ДРАМА";
    poster.style.backgroundImage = "url('/img/bg.jpg')";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  createMovieList(movieDB.movies, movieList);
  deleteAdv(adv);
  makeChanges();
  // sortArr(movieDB.movies, movieList);
});

// function rrr(element) {
//   element.preventDefault();
//   listSaw.innerHTML = "";
//   movieDB.movies.push(`${addNewFilm.value}`);
//   console.log(addNewFilm.value);
//   alert(addNewFilm.value);
//   //listSaw.innerHTML = "";
//   movieDB.movies.sort();
//   movieDB.movies.forEach((item, i) => {
//     listSaw.innerHTML += `<h3>${i + 1}. ${item} </br></h3>`;
//   });
// }

// newFilmButton.addEventListener("click", rrr);

// listSaw.append(`${addNewFilm.value}`);

// adv.forEach((element) => {
//   element.remove();
// });

// listSaw.innerHTML = "";
// movieDB.movies.sort();

// movieDB.movies.forEach((item, i) => {
//   listSaw.innerHTML += `<h3>${i + 1}. ${item} </br></h3>`;
// });
