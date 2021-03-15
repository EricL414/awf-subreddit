/*
    FILE:       FavoritePage.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This file contains the codes to display all posts in the favorite json in localStorage.
*/
import React from 'react';
import FavPost from "../Posts/FavPost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Pages.css"

class FavoritePage extends React.Component {

    render(){
        var fav = localStorage.getItem('fav');
        const fav_parsed = JSON.parse(fav);
        //post position index in favorite json
        let index = 0;
        return(
            <div className="fav-body">
                
                <div className="back-button">
                    <Link  to={"/"}><Button>Back to search page</Button></Link>               
                </div>
                <h2 className="page-header">
                    <br/>
                    Your Favorite posts
                </h2>
                <div className="favbtn">                    
                    { (fav_parsed != null) ? fav_parsed.map((post, key)=> <FavPost key={key} index={index++} post={post} />) : "" }
                </div>
            </div>

        );
        
    }

        
}


export default FavoritePage;