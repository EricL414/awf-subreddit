/*
    FILE:       SearchPage.js
    PROJECT:    AWF-FrontendAssignment-Subreddit
    PROGRAMMER: Eric Lin 7221476
    DATE:       March 14th, 2021
    DESCRIPTION:This file contains the codes to get the subreddit API json data based on user input and display top 10 hotest post in that subreddit.
*/
import React, {useState, useEffect} from 'react';
import Post from '../Posts/SearchPost';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Pages.css"

function SearchPage() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState(localStorage.getItem('lastSub'));   
    const [srexistence, setSrexistence] = useState(-1);

    var fav = [];
    var postReturn;

    // initialize Web Storage API -> localStorage
    if(localStorage.getItem('fav')===null){
        localStorage.setItem('fav', JSON.stringify(fav));
    }
    
    // useEffect for subreddit input changes
    useEffect(()=>{
        //get subreddit json data through reddit API
        fetch("https://www.reddit.com/r/"+subreddit+"/hot.json").then(res=>{
            // no such subreddit
            if(res.status!==200){
            console.log("no such subreddit");
            setSrexistence(0);
            return;
        }
    
        //there is a subreddit
        res.json().then(data=>{
            if(data!=null){
            setSrexistence(1);
            //store the name of current valid subreddit
            localStorage.setItem('lastSub', subreddit);
            //store top 10 hotest posts in that subreddit from API json
            setArticles(data.data.children.slice(0,10));
            }
        })
        });
    }, [subreddit]);

    //if the subreddit does exist
    if(srexistence === 1)
    {
        postReturn=(
            <div className="articles">
                <h4 className="sub-header">Top 10 Hotest Posts</h4>
                {
                    //pass each post into Post component to show it
                    (articles != null) ? articles.map((article,index)=> <Post key={index} article={article.data} />) : ''
                }
            </div>  
        ) ;                                                                                                                                  
    
    }
    //if the subreddit does not exist
    else
    {
        postReturn=(
            <div className="search-post">
                <h1> This subreddit does not exist. Try some other words. </h1>
            </div> );
            
    }

    return (
        <div className="search-page">
            <div className="fav-button">
                <Link  to={"/favorite"}><Button>Check my Favorites</Button></Link>
            </div>
            <div className="search-body">
                <div className="search-box">
                    <br/>
                    <input type="text" className="search-input" placeholder="enter a subreddit" onChange={event => setSubreddit(event.target.value)} />
                    <h2 className="page-header">Current Searching Subreddit: {subreddit}</h2>                   
                </div>
                {/* conditionally section */}
                {postReturn}
            </div>
        </div>                                                                                                                                      
    );
    
}

export default SearchPage;
