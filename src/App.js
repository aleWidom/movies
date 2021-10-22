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
import Footer from "./components/organims/Footer/Footer";
import {Provider} from 'react-redux'
import generateStore from './redux/store';



function App() {
  
  const store = generateStore()

  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/details/:id">
         <Link to="/"><Logo/></Link> 
         <MovieDetail/>
        </Route>
        <Route path="/">
         <Link to="/"><Header/></Link> 
         <MovieList/>
         <Footer/>
        </Route>
      </Switch>
    </Router> 
    </Provider>
    
  );
}

export default App;
