import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Logo from './components/atoms/Logo/Logo';
import Header from './components/organims/Header/Header';
import MovieList from "./components/organims/Main-MovieList/MovieList";
import MovieDetail from "./components/organims/Main-MovieDetail/MovieDetail";
import { Provider } from 'react-redux'
import generateStore from './redux/store';
import Welcome from "./components/organims/Welcome/Welcome";

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/movies/details/:id">
            <Logo />
            <MovieDetail />
          </Route>
          <Route path="/movies">
            <Header />
            <MovieList />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
