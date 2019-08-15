import axios from 'axios';



const extractArticle = article => ({
   title: article.title,
   date: article.first_published_date.substring(5, 10),
   url: article.url,
   section: article.section,
   abstract: article.abstract,
   picture: article.multimedia[1],
   author: article.byline
});

const extractList = list => ({
    name: list.list_name,
    published: list.newest_published_date,
    updated: list.updated
 });

export const LiveFeed = async () =>{
    const promise = await axios.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3EZ6bGrM9ZfGjkDiWMi0pxwlzpp9dBhv')
    const results = promise.data.results;
    return results.map(extractArticle);
}

export const Fetch_Books_Lists = async () =>{
    const promise = await axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=3EZ6bGrM9ZfGjkDiWMi0pxwlzpp9dBhv')
    const results = promise.data.results;
    return results.map(extractList);
}