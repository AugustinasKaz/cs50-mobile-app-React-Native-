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

export const LiveFeed = async () =>{
    const promise = await axios.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3EZ6bGrM9ZfGjkDiWMi0pxwlzpp9dBhv')
    const results = promise.data.results;
    return results.map(extractArticle);
}
