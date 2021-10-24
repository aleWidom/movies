import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './components/atoms/Logo/Logo';
import Header from './components/organims/Header/Header';
import MovieList from "./components/organims/Main-MovieList/MovieList";
import MovieDetail from "./components/organims/Main-MovieDetail/MovieDetail";
import {Provider} from 'react-redux'
import generateStore from './redux/store';
import Button from "./components/atoms/button/Button";



function App() {
  
  const store = generateStore()

  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/details/:id">
        <Logo/>
         <MovieDetail/>
        </Route>
        <Route path="/movies">
        <Header/>
         <MovieList/>
         <Button/>
        </Route>
        <Route path="/">
        <Link to="/movies">Welcome</Link> 
        </Route>
      </Switch>
    </Router> 
    </Provider>
    
  );
}

export default App;
