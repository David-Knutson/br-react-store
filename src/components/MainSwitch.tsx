import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductsComponent from "./pages/ProductsComponent";

interface MainSwitchProps {}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainSwitch: React.FC<MainSwitchProps> = (props) => {
  let query = useQuery();
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route
        path="/product/"
        render={(props) => <ProductsComponent productId={query.get("id")!} />}
      />
    </Switch>
  );
};

export default MainSwitch;
