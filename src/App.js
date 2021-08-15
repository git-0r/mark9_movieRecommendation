import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  action: [
    {
      name: "Godzilla vs Kong",
      rating: "6.4",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBC8Kn8qBUQsO-crKxyp81w6awUc1xP2Y8iGL6Q4YNpI40yHzFmfoSsRyyK2XpBMRs&usqp=CAU"
    },
    {
      name: "Venom",
      rating: "6.7",
      imgUrl:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/venom_onesheet_1400x2100_rated.png?itok=0tO6umMg"
    },
    {
      name: "Jumanji",
      rating: "6.6",
      imgUrl: "https://www.cinema.com/image_lib/15835_poster3.jpg"
    },
    {
      name: "Avengers",
      rating: "8.4",
      imgUrl:
        "https://cdn.traileraddict.com/content/marvel-studios/avengers-endgame-poster-2.jpg"
    }
  ],

  ficton: [
    {
      name: "Quiet Place",
      rating: "7.4",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Blood Shot",
      rating: "5.7",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/45/Bloodshot_-_official_film_poster.jpeg"
    },
    {
      name: "Terminator",
      rating: "6.2",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/Terminator_Dark_Fate_poster.jpg"
    },
    {
      name: "Predator",
      rating: "5.3",
      imgUrl:
        "https://lumiere-a.akamaihd.net/v1/images/predator_feature-poster_584x800_6ec38255.jpeg?region=0%2C0%2C584%2C800"
    }
  ],
  animation: [
    {
      name: "Luca",
      rating: "7.5",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png"
    },
    {
      name: "Demon Slayer",
      rating: "8.3",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Soul",
      rating: "8.1",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Soul_Poster.jpeg"
    },
    {
      name: "Coco",
      rating: "8.4",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg"
    }
  ],
  comedy: [
    {
      name: "Deadpool",
      rating: "7.7",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png"
    },
    {
      name: "Sonic",
      rating: "6.5",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg"
    },
    {
      name: "Despicable Me",
      rating: "7.3",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_.jpg"
    },
    {
      name: "Detective Pikachu",
      rating: "6.6",
      imgUrl:
        "https://musicart.xboxlive.com/7/d70e5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("action");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1> Movies </h1>
      <p>Checkout my favorite movies. Select a category to get started.</p>

      <div>
        {Object.keys(movies).map((category) => (
          <button onClick={() => categoryClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {movies[selectedCategory].map((movie) => (
            <li key={movie.name}>
              <div>
                <img src={movie.imgUrl} alt="" />
                <p> {movie.name} </p>
                <p> {movie.rating} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
