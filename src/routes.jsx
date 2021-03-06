import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/quiz" component={Quiz} />
      <Route path="/result" component={Result} />
    </Switch>
  );
}
