import './App.css';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import BoardList from './components/BoardList';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateBoard from './components/CreateBoard';
import ReadBoard from './components/ReadBoard';

const App = () => {
  return (
    <>
      <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route path = "/" exact component = {BoardList}></Route>
              <Route path = "/board" component = {BoardList}></Route>
              <Route path="/create-board/:bno" component={CreateBoard }></Route>
              <Route path="/read-board/:bno" component={ReadBoard}></Route>
            </Switch>
            <Footer />
          </div>
      </Router>
    </>
  );
}

export default App;
