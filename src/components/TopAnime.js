import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AnimeCard from "./AnimeCard";

function TopAnime() {
  const [top, setTop] = useState([]);
  const [pop, setPop] = useState([]);
  const base_url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
  const base_url2 = "https://api.jikan.moe/v3/top/anime/1/bypopularity";

  useEffect(() => {
    getTopNewAnime();
    getPopAllAnime();
  }, []);

  const getTopNewAnime = async () => {
    await fetch(`${base_url}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          setTop(data.top);
        } else {
          setTop([]);
        }
      });
  };

  const getPopAllAnime = async () => {
    await fetch(`${base_url2}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          setPop(data.top);
        } else {
          setPop([]);
        }
      });
  };

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="anime-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">New and Upcoming Anime!</h1>

          <span className="count-pill">
            {top.slice(0, 10).length} {top.length === 1 ? "anime" : "animes"}
          </span>
        </div>

        {top.length > 0 ? (
          <animated.div style={props}>
            <div className="anime-grid">
              {top.slice(0, 10).map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} type="top" />
              ))}
            </div>
          </animated.div>
        ) : (
          <h2 className="no-animes">No animes in your list! Add some!</h2>
        )}

        <div className="header" style={{ paddingTop: "24px" }}>
          <h1 className="heading">Popular Anime</h1>

          <span className="count-pill">
            {top.slice(0, 10).length} {top.length === 1 ? "anime" : "animes"}
          </span>
        </div>

        {pop.length > 0 ? (
          <animated.div style={props}>
            <div className="anime-grid">
              {pop.slice(0, 10).map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} type="top" />
              ))}
            </div>
          </animated.div>
        ) : (
          <h2 className="no-animes">No animes in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
}

export default TopAnime;
