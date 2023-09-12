import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { PinFeed } from "./components/PinsFeed";
import { CreatePin } from "./components/CreatePin";
import { MyBoards } from "./components/Boards";
import { MyPins } from "./components/Pins";
import EditPin from "./components/EditPin";
import PinInfo from "./components/PinInfo";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <PinFeed />
          </Route>
          <Route path="/pins/new">
            <CreatePin />
          </Route>
          <Route path="/myboards">
            <MyBoards />
          </Route>
          <Route path="/mypins">
            <MyPins />
          </Route>
          <Route path="/mypins/edit/:pinId">
            <EditPin />
          </Route>
          <Route path="/mypins/:pinId">
            <PinInfo />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
