import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "./Container/Footer/footer";
import { Navigation } from "./Container/Navigation/navigation";
import { Contact } from "./Container/pages/Contact/contact";
import { Home } from "./Container/pages/Home/home";
import { Realisations } from "./Container/pages/Realisations/realisations";
import { Services } from "./Container/pages/Services/services";

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/usługi"><Services /></Route>
        <Route path="/galeria"><Realisations /></Route>
        <Route path="/kontakt"><Contact /></Route>


        <Route path="/"><Redirect to="home" /></Route>

      </Switch>
      <Footer/>
    </HashRouter>

  );
}

export default App;
