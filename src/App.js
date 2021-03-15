/*
    FILE:       App.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This is the app file of this react project, which contains the Routes to other pages.
*/

import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SearchPage from "./components/Pages/SearchPage";
import FavoritePage from "./components/Pages/FavoritePage";


class App extends React.Component {
  render(){
      return(
          <React.StrictMode>

              <Router>
                  <Switch>
                      {/* Main page */}
                      <Route path="/awf-subreddit/" exact component={SearchPage} />    
                      {/* Favorite Page */}
                      <Route path="/awf-subreddit/favorite/" exact component={FavoritePage} />

                  </Switch>  

              </Router>  
          </React.StrictMode>
      );
  }



}

export default App;
