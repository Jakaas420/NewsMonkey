import React, { useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResult, setTotalResult] = useState()

    

     const Capitalized =(string) =>
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

     const updateNews = async () =>
    {
     
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=75222ead90154d75a7c6402271d7872b&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResult(parsedData.totalResult);  
    }

    useEffect(() => {
        document.title = `${Capitalized(props.category)} - NewsMonkey`
        updateNews();
        // eslint-disable-next-line 
    },[])
    

    //  const componentDidMount = async() => {
    //     if(!(page + 1> Math.ceil(totalResult/props.pageSize))){

    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=75222ead90154d75a7c6402271d7872b&page=1&pageSize=${props.pageSize}`;
    //         setLoading(true);
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         console.log(parsedData);
    //         setArticles(parsedData.articles);
    //         setLoading(false);
    //         setTotalResult(parsedData.totalResult);  
    //     }
    // }

    const handleNextClick = async () => {
        setPage(page+1);
        updateNews();
    }

    const handlePrevClick = async () => {
        setPage(page-1);
        updateNews();

    }

    
        return (
            <div className="container my-3" >
                <h1 className='text-center' style={{margin:"40px 0px",marginTop:"90px"}}>NewsMonkey - Top {Capitalized(props.category)} HeadLines</h1>
                {loading && <Spinner/>}
                <div className="row">
                    {articles && articles.length > 0 ? (
                       !loading && articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem 
                                    Title={element && element.title ? element.title.slice(0, 45) : ""} 
                                    Description={element && element.description ? element.description.slice(0, 88) : ""} 
                                    imageUrl={element.urlToImage} 
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>
                <div className='container d-flex justify-content-between'>
                    <Button disabled={page <= 1} onClick={handlePrevClick} variant="dark">&larr; Previous</Button>
                    <Button disabled={page + 1> Math.ceil(totalResult/props.pageSize)} onClick={handleNextClick} variant="dark">Next &rarr;</Button>
                </div>
            </div>
        );
}


// News.defaultProps ={
//     country :"in",
//     pageSize:6,
//     category:"science"
//    }

News.propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
   }
export default News;

