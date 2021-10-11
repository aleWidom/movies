import ListadoPeliculas from './components/ListadoPeliculas';
import DetailPelicula from './components/DetailPelicula';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <DetailPelicula/>
        </Route>
        <Route path="/">
          <ListadoPeliculas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
