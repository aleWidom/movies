import ListadoPeliculas from './components/ListadoPeliculas';
import DetailPelicula from './components/DetailPelicula';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './components/Search';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <DetailPelicula/>
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
