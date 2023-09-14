import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { CreatePin } from "./components/CreatePin";
import EditPin from "./components/EditPin";
import PinViews from "./components/PinViews";
import BoardViews from "./components/BoardViews";
import PinFeedViews from "./components/PinFeedViews";
import PinInfoViews from "./components/PinInfoView";

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
            <PinFeedViews />
          </Route>
          <Route path="/pins/new">
            <CreatePin />
          </Route>
          <Route path="/myboards">
            <BoardViews />
          </Route>
          <Route path="/mypins">
            <PinViews />
          </Route>
          <Route path="/mypins/edit/:pinId">
            <EditPin />
          </Route>
          <Route path="/pins/:pinId">
            <PinInfoViews />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
