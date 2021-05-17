import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDescription from "./pages/ProductDescription";

interface MainSwitchProps {}

const MainSwitch: React.FC<MainSwitchProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route
        exact
        path="/product/:id"
        render={(props) => <ProductDescription key={props.match.params.id} />}
      />
    </Switch>
  );
};

export default MainSwitch;
