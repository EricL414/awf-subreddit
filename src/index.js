/*
    FILE:       index.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This is the index JavaScript file of this react project, which the React render codes.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <div className="app">
    <h2>Eric Lin (7221476) - AWF Frontend Assignment - SubReddit Posts</h2>
    <App />
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

