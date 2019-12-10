import React from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;

// yarn add @babel/plugin-proposal-class-properties -D