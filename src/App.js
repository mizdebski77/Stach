import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { About } from "./Container/About/about";
import { Container } from "./Container/container";
import { Home } from "./Container/Home/home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/o-nas"><Home /></Route>
        <Route path="/usługi"><Home /></Route>
        <Route path="/realizacje"><Home /></Route>
        <Route path="/współpraca"><Home /></Route>
        <Route path="/kontakt"><Home /></Route>


        <Route path="/"><Redirect to="home" /></Route>

      </Switch>
    </HashRouter>

  );
}

export default App;
