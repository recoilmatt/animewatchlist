import React, { useState } from "react";
import ResultCard from "./ResultCard";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  /*   const [anime, setAnime] = useState([]); */
  const base_url = "https://api.jikan.moe/v3";

  // Search MAL animes
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`${base_url}/search/anime?q=${e.target.value}&page=1`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((anime) => (
                <li key={anime.mal_id}>
                  <ResultCard anime={anime} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
