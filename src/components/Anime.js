import React, { useState, useEffect } from "react";

function Anime(props) {
  const [anime, setAnime] = useState({});

  console.log(props.location.state.id);

  // Get single MAL anime
  const getAnime = () => {
    fetch(`https://api.jikan.moe/v3/anime/${props.location.state.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          setAnime(data);
        } else {
        }
      });
  };

  useEffect(() => {
    getAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*   componentDidMount () {
    const { anime } = this.props.match.params
    const { mal_id } = this.props.location.state
    console.log(anime.mal_id);
  }
 */
  return (
    <div className="add-page">
      <div className="container" style={{ display: "flex" }}>
        <div className="image" style={{ padding: "10%" }}>
          <img
            style={{ borderRadius: "8px" }}
            src={anime.image_url}
            alt={anime.title}
          />
        </div>
        <div className="description" style={{ padding: "5%" }}>
          <h1 className="title">{anime.title}</h1>

          <h3 className="episodes">{anime.episodes} episodes </h3>
          <div className="synopsis">{anime.synopsis}</div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
