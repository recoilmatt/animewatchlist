import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]); //useEffect for local storage -> convert to string for watchlist.

  // actions
  const addAnimeToWatchlist = (anime) => {
    dispatch({ type: "ADD_ANIME_TO_WATCHLIST", payload: anime });
  };

  const removeAnimeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_ANIME_FROM_WATCHLIST", payload: id });
  };

  const addAnimeToWatched = (anime) => {
    dispatch({ type: "ADD_ANIME_TO_WATCHED", payload: anime });
  };

  const removeAnimeFromWatched = (id) => {
    dispatch({ type: "REMOVE_ANIME_FROM_WATCHED", payload: id });
  };

  const moveToWatchlist = (anime) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: anime });
  };

  const clearWatchlist = () => dispatch({ type: "CLEAR_WATCHLIST" });

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        top: state.top,
        addAnimeToWatchlist,
        removeAnimeFromWatchlist,
        removeAnimeFromWatched,
        addAnimeToWatched,
        moveToWatchlist,
        clearWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
