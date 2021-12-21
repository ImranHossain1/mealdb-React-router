import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Meals from './components/Meals/Meals';
import Restaurant from './components/Restaurant/Restaurant';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';


function App() {
  return (
    <div className="App">
       <Router>
        
        <Header></Header>

          <Switch>
            <Route path="/restaurant">
              <Restaurant  />
            </Route>
            <Route path="/meal/:mealId">
              <Meal></Meal>
            </Route>

          </Switch>
       
    </Router>
    </div>
  );
}

export default App;
