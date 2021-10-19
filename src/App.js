import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/organims/Header/Header';
import MovieList from "./components/organims/Main-MovieList/MovieList";
import MovieDetail from "./components/organims/Main-MovieDetail/MovieDetail";
import Footer from "./components/organims/Footer/Footer";
import {Provider} from 'react-redux'
import generateStore from './redux/store';
import ListaDePeliculas from './components/ListaDePeliculas'


function App() {
  
  const store = generateStore()

  return (
    <Provider store={store}>
      <ListaDePeliculas/>
    </Provider>
     /*  <Router>
      <Switch>
      <Route path="/redux">
           Redux
        </Route>
        <Route path="/details/:id">
         <Link to="/"><Header /></Link> 
         <MovieDetail/>
        </Route>
        <Route path="/">
         <Link to="/"><Header/></Link> 
         <MovieList/>
         <Footer/>
        </Route>
      </Switch>
    </Router> */
  );
}

export default App;
