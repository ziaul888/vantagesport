import React from "react";
import HomePage from "../pages/HomePage";
import { TrainingPage } from "../pages/TrainingPage";
import { Switch, Route } from "react-router-dom";

export const AppRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/training" component={TrainingPage} />
      </Switch>
    </>
  );
};
