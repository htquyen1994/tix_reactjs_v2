import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './components/Home/Header/Header';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import Loading from './components/Common/Loading/Loading';
import RouteMain from './templates/Main'
import { routerConfig } from './config/routing';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_CURRENT_USER_LOGIN } from './redux/constant/Login.constant';

function App() {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch({
      type: GET_CURRENT_USER_LOGIN
    })
  })

  const renderRouteMain = (routers) => {
    return routers.map((item, index) => {
      return <RouteMain {...item} key={index}></RouteMain>
    })
  }

  return (
    <BrowserRouter>
      <Loading/>
      <Switch>
        {renderRouteMain(routerConfig)}
        {/* <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/detail/:id' component={Details} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/' component={Home} /> */}
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
