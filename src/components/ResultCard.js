import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useSpring, animated } from "react-spring";

function ResultCard({ anime }) {
  const [id, setId] = useState();

  const {
    addAnimeToWatchlist,
    addAnimeToWatched,
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

  const watchedDisabled = storedAnimeWatched ? true : false;
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleClick = () => {
    setId(anime.mal_id);
  };
  console.log(id);

  return (
    <animated.div style={props}>
      <div className="result-card">
        <div className="poster-wrapper">
          {/* <Link to={`${anime.mal_id}`}> */}
          <img src={anime.image_url} alt={anime.title} onClick={handleClick} />
          {/*  </Link> */}
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{anime.title}</h3>
            <h3 className="episodes">{anime.episodes} episodes </h3>
            <div className="synopsis">{anime.synopsis}</div>
            <div className="controls">
              <button
                className="btn"
                disabled={watchlistDisabled}
                onClick={() => addAnimeToWatchlist(anime)}
              >
                Add to Watchlist
              </button>
              <button
                className="btn"
                disabled={watchedDisabled}
                onClick={() => addAnimeToWatched(anime)}
              >
                Add to Watched
              </button>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default ResultCard;
