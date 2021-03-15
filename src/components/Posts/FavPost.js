/*
    FILE:       FavPost.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This file contains the codes to set each favorite post content in Favorite page by using the data from FavoritePage.js
*/
import React from 'react';
import UnfavoriteButton from "../Buttons/UnfavoriteButton";
import "./Post.css"

function FavPost(props){
    
   return(
       <article className="post">
           <h4 className="title-align">
                Score: {props.post.score} | /r/{props.post.subreddit}/<a href={"https://www.reddit.com" +  props.post.permalink}  target="noreferer">      
               {props.post.title}  
           </a> 
           </h4>
           <UnfavoriteButton index={props.index} post={props.post}/>
           
       </article>
   )
}

export default FavPost;