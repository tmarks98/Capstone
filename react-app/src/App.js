import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
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
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const isLoggedIn = !!sessionUser;
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <PinFeedViews />
          </Route>
          <Route path="/pins/new">
            {isLoggedIn ? <CreatePin /> : <Redirect to="/" />}
          </Route>
          <Route path="/myboards">
            {isLoggedIn ? <BoardViews /> : <Redirect to="/" />}
          </Route>
          <Route path="/mypins">
            {isLoggedIn ? <PinViews /> : <Redirect to="/" />}
          </Route>
          <Route path="/mypins/edit/:pinId">
            {isLoggedIn ? <EditPin /> : <Redirect to="/" />}
          </Route>
          <Route path="/pins/:pinId">
            <PinInfoViews />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
