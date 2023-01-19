import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleArray = posts.map((item) => (
        /*array of Article components*/
        <Article
            id={item.id}
            title={item.title}
            date={item.date}
            preview={item.preview}
            minutes={item.minutes}
        />  
    ))

    return(
        <main>{articleArray}</main>
    )

}

export default ArticleList