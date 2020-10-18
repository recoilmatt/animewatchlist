export default (state, action) => {
  switch (action.type) {
    case "ADD_ANIME_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_ANIME_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (anime) => anime.mal_id !== action.payload
        ),
      };
    case "ADD_ANIME_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (anime) => anime.mal_id !== action.payload.mal_id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (anime) => anime.mal_id !== action.payload.mal_id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_ANIME_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (anime) => anime.mal_id !== action.payload
        ),
      };
    case "CLEAR_WATCHLIST":
      return {
        ...state,
        watchlist: [],
      };
    default:
      return state;
  }
};
