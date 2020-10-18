import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AnimeControls = ({ type, anime }) => {
  const {
    removeAnimeFromWatchlist,
    addAnimeToWatched,
    moveToWatchlist,
    removeAnimeFromWatched,
    addAnimeToWatchlist,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedAnime = watchlist.find((o) => o.mal_id === anime.mal_id);
  let storedAnimeWatched = watched.find((o) => o.mal_id === anime.mal_id);

  const watchlistDisabled = storedAnime
    ? true
    : storedAnimeWatched
    ? true
    : false;

  function test() {
    storedAnime ? removeAnimeFromWatchlistToast() : addAnimeToWatchlistToast();
  }

  function addAnimeToWatchlistToast() {
    toast.success("Added to Watchlist");
    addAnimeToWatchlist(anime);
  }

  function removeAnimeFromWatchlistToast() {
    toast.error("Removed from Watchlist");
    removeAnimeFromWatchlist(anime.mal_id);
  }

  function moveToWatchedToast() {
    toast.success("Added to Watchlist");
    addAnimeToWatched(anime);
  }

  return (
    <div className="inner-card-controls">
      {type === "top" && (
        <>
          <button
            className="ctrl-btn"
            disabled={watchlistDisabled}
            onClick={test}
          >
            <i className="fas fa-plus"></i>
          </button>
        </>
      )}

      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={moveToWatchedToast}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button className="ctrl-btn" onClick={removeAnimeFromWatchlistToast}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(anime)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeAnimeFromWatched(anime.mal_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
