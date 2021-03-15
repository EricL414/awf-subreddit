/*
    FILE:       SearchPost.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This file contains the codes to set each top10 hotest post content in the home(Search) page by using the data from SearchPage.js
*/
import React from 'react';
import FavoriteButton from '../Buttons/FavoriteButton';
import Button from "react-bootstrap/Button";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function SearchPost(props){

    var switchBtn;
    const postId = props.article.id;
    var fav = localStorage.getItem('fav');
    var fav_parsed = JSON.parse(fav);
    var returnState=1;

    //check each post in the favorite json
    Object.keys(fav_parsed).forEach(function(key) {
        //compare if any post in the list has already been added to the favorite localstorage
        if(postId===fav_parsed[key].id)
        {
            //conditionally render content flag
            returnState=0;
        }
      });
    
    //if the post is not exsting in the favorite json
    if(returnState === 1)
    {
        //display the add to favorite button
        switchBtn = (
            <FavoriteButton post={props.article} />
        );
     
    }
    //if the post is in the favorite json
    else
    {
        //display the post already added disabled button
        switchBtn = (
            <div className="favbtn">
                <Button className="btn-sm btn-success disabled btn-disabled" disabled = {true}>Post added to Favorites</Button>
            </div>
        );
                
    }

    return(
        <article className="post">
            <h4 className="title-align">
             Score: {props.article.score} | 
            <a href={"https://www.reddit.com" +  props.article.permalink}  target="noreferer">      
             {props.article.title}
            </a>   
            </h4>     
            {switchBtn}
        </article>
    )
}
   

export default SearchPost;