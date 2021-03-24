import React from 'react';
import Form from './components/Form';
import Profile from './components/Profile';
import './styles.scss';

const Search = () => (
  <div className="search-container">
    <div className="search-content">
      <Form />
      <Profile />
    </div>
  </div>
)

export default Search;