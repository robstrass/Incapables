import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import HomePage from './components/HomePage';
import AboutUs from './components/HomePage/AboutUs'
import NavBar from './components/Navbar';
import SubNav from './components/SubNav';
import Projects from './components/Projects';
import SingleProject from './components/SingleProject';
import CreateProject from './components/CreateProject';
import SingleCategory from './components/SingleCategory';
import Profile from './components/Profile';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <SubNav />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route exact path='/'>
            <HomePage />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route path='/projects/:projectId'>
          <SingleProject />
        </Route>
        <Route path='/create'>
          <CreateProject />
        </Route>
        <Route path='/categories/:categoryId'>
          <SingleCategory />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/about'>
          <AboutUs />
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
