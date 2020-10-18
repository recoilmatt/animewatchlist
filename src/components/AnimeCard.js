import React from "react";
import { AnimeControls } from "./AnimeControls";
import { Link } from "react-router-dom";

function AnimeCard({ anime, type }) {
  return (
    <div className="anime-card-outer">
      <div className="anime-card">
        <Link
          to={{
            pathname: `${anime.mal_id}`,
            state: {
              id: anime.mal_id,
            },
          }}
        >
          <div className="overlay"></div>

          <img src={anime.image_url} alt={anime.title} />
        </Link>
        <AnimeControls type={type} anime={anime} />
      </div>

      <div className="anime-title">{anime.title}</div>
    </div>
  );
}

export default AnimeCard;
