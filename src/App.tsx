import React from 'react';

import Header from './components/Header';
import MainPage from './views/MainPage';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
