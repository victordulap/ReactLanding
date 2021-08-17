import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
