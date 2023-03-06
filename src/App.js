import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { About } from "./Container/About/about";
import { Collaborations } from "./Container/Collaborations/collab";
import { Contact } from "./Container/Contact/contact";
import { Home } from "./Container/Home/home";
import { Realistaions } from "./Container/Realisations/realisations";
import { Services } from "./Container/Services/services";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/o-nas"><About /></Route>
        <Route path="/usługi"><Services /></Route>
        <Route path="/realizacje"><Realistaions /></Route>
        <Route path="/współpraca"><Collaborations /></Route>
        <Route path="/kontakt"><Contact /></Route>


        <Route path="/"><Redirect to="home" /></Route>

      </Switch>
    </HashRouter>

  );
}

export default App;
