/*
    FILE:       UnfavoriteButton.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This file contains the codes to set UnfavoriteButton.
*/
import React from 'react';
import Button from "react-bootstrap/Button";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Buttons.css"

function UnfavoriteButton (props) {

    //button event handler of "Remove from favorite", remove the post from localStorage
    function removePost()
    {
        //get favorite json from localStorage
        var fav = localStorage.getItem('fav');
        var fav_parsed = JSON.parse(fav);
        var postIndex = props.index;
        //delete the post
        fav_parsed.splice(postIndex,1);
        //store to localStorage again
        fav = JSON.stringify(fav_parsed);
        localStorage.setItem('fav', fav);
        //refresh the page
        window.location.reload();

    }
    
    return(
        <div className="favbtn">
            <Button className="btn-sm btn-warning btn-position" onClick={removePost}>Remove from Favorite</Button>
        </div>
    );

    
}


export default UnfavoriteButton;