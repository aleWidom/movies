import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './components/Search';
import MovieDetail from './components/MovieDetail';



function App() {
  return (
      <Router>
      <Switch>
        <Route path="/details/:id">
          <Link to="/"><Header /></Link>
          <MovieDetail />
        </Route>
        <Route path="/">
          <Link to="/"><Header/></Link>
          <Search/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
