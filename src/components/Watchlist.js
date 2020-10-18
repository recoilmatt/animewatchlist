import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AnimeCard from "./AnimeCard";

function Watchlist() {
  const { watchlist, clearWatchlist } = useContext(GlobalContext);

  return (
    <div className="anime-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "anime" : "animes"}
          </span>

          <button onClick={() => clearWatchlist()} className="btn btn-main">
            Clear Watchlist
          </button>
        </div>

        {watchlist.length > 0 ? (
          <div className="anime-grid">
            {watchlist.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-animes">No animes in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
