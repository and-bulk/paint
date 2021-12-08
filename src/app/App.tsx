import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './providers/AppRouter';

export const App: FC = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};