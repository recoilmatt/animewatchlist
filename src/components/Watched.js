import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AnimeCard from "./AnimeCard";

function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="anime-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "anime" : "animes"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="anime-grid">
            {watched.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-animes">No animes in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
