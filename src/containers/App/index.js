import React from 'react';
import NotFound from 'components/NotFound';
import Workshop from 'containers/Workshop';
import { Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Switch style={{
        height: '100%'
      }}>
        <Route component={Workshop} path='/' />
        <NotFound />
      </Switch>
    </div>
  );
}

