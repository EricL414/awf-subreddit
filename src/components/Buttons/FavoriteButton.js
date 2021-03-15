/*
    FILE:       FavoriteButton.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This file contains the codes to set FavoriteButton.
*/
import React from 'react';
import Button from "react-bootstrap/Button";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Buttons.css"

class FavoriteButton extends React.Component {
    constructor(props) {
        super(props);

        this.storePost = this.storePost.bind(this);

      }

    //button event handler of "add to favorite", store the post into localStorage
    storePost()
    {
        //get the existing favorite json from the localStorage       
        var fav = localStorage.getItem('fav');
        var fav_parsed = JSON.parse(fav);

        //current post
        var thepost = this.props.post;
        //push into the json
        fav_parsed.push(thepost);
        fav = JSON.stringify(fav_parsed);
        //store again
        localStorage.setItem('fav', fav);
        //refresh the page
         window.location.reload();

    }

    render(){    
        return(
            <div className="favbtn">
                <Button className=" btn-sm  btn-success btn-position"onClick={this.storePost}>Add to Favorite</Button>
            </div>

        );        
    }

}


export default FavoriteButton;