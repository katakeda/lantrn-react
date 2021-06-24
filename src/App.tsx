import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Home } from './components/Home/Home';
import { Results } from './components/Results/Results';
import { About } from './components/About/About';
import { Signup } from './components/Auth/Signup';
import { Login } from './components/Auth/Login';
import { NotFound } from './components/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <Header />
          <Main>
            <Switch>
              <Route exact path='/'><Home /></Route>
              <Route path='/signup'><Signup /></Route>
              <Route path='/login'><Login /></Route>
              <Route path='/about'><About /></Route>
              <Route path='/results'><Results /></Route>
              <Route path='*'><NotFound /></Route>
            </Switch>
          </Main>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
