import { BrowserRouter, Switch, Route } from "react-router-dom";

// views
import Home from "./Pages/Home/Home";
import WeaterCity from "./Pages/WeaterCity/WeaterCity";

// styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:id">
          <WeaterCity />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
