import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import TopAnime from "./components/TopAnime";
import Anime from "./components/Anime";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/">
            <TopAnime />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route exact path="/:id" component={Anime}></Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
