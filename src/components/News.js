import React, { useEffect,useState } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
 const [articles, setarticles] = useState([])
 const [loading, setloading] = useState(false)
 const [page, setpage] = useState(1)
 const [totalResults, settotalResults] = useState(0)


  

  const capitalizeFirst=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
  }


  
  

    const updateNews=async()=>{
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      setloading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData =await data.json();
      props.setProgress(70);
      setarticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setloading(false)
      props.setProgress(100); 
    }


    useEffect(() => {
      updateNews()
      document.title=`Newsverse- [ ${capitalizeFirst(props.category)} ]`
      if(props.category==="general"){
        document.body.style.background="url(https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?cs=srgb&dl=pexels-kaique-rocha-109919.jpg&fm=jpg)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
        document.body.style.transition="all 1s"
      }
      if(props.category==="entertainment"){
        document.body.style.background="url(https://images.pexels.com/photos/3945325/pexels-photo-3945325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
      }
      if(props.category==="business"){
        document.body.style.background="url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
      }
      if(props.category==="health"){
        document.body.style.background="url(https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
      }
      if(props.category==="technology"){
        document.body.style.background="url(https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
      }
      if(props.category==="sports"){
        document.body.style.background="url(https://images.pexels.com/photos/1332237/pexels-photo-1332237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
      }
      if(props.category==="science"){
        document.body.style.background="url(https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)no-repeat center fixed"
        document.body.style.backgroundSize="cover"
      }
    },[])


  // handlePrevClick=async()=>{
  
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //     this.setState({loading:true});
  //     let data = await fetch(url);
  //     let parsedData =await data.json();
  //     this.setState({
  //       page:this.state.page - 1,
  //       articles: parsedData.articles,
  //      totalResults:parsedData.totalResults,
  //       loading:false
  //     })
  // }
  // handleNextClick=async()=>{
  //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){
  //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${this.state.page+1}&pageSize=${props.pageSize}`
  //         this.setState({loading:true});
  //         let data = await fetch(url);
  //         let parsedData =await data.json();
  //         this.setState({
  //         page:this.state.page + 1,
  //         articles: parsedData.articles,
  //      totalResults:parsedData.totalResults,
  //         loading:false
  //         })
  //   }
  // }
    const fetchMoreData = async() => {
         
          setpage(page+1);
          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
          setloading(true)
          let data = await fetch(url);
          let parsedData =await data.json();
          setarticles(articles.concat(parsedData.articles))
          settotalResults(parsedData.totalResults)
          setloading(false)          
      };

  
    return (
         <>
         {loading && <Loader/>}
        <div className="container" >
            <h2>Newsverse - Top Headlines [ {props.category} ]</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                >

              
                <div className="row" style={{"height":"auto"}}>
                {articles.map((element)=>(
                  <div className="col-md-4 item" key={element.url}>
                    <NewsItem title={element.title==null?" ":element.title.slice(0,53)} description={!element.description?"Click Read More":element.description.slice(0, 88)} imgUrl={element.urlToImage==null?"https://images.pexels.com/photos/40906/art-attachment-background-boat-40906.jpeg?cs=srgb&dl=pexels-public-domain-pictures-40906.jpg&fm=jpg":element.urlToImage}
                    newsUrl={element.url} author={!element.author?"Unknown":element.author} publishedAt={element.publishedAt} /> 
                  </div>
                ))}
                </div>
             

             </InfiniteScroll>
             {/* <div className="container flex-md-row justify-content-between btn-container">
               <button disabled={this.state.page<=1} className="btn btn-dark mx-4" onClick={this.handlePrevClick}><img className="mx-1" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-left.png" alt="arrow"/>Previous</button>
               <p>{this.state.page} / {Math.ceil(this.state.totalResults/props.pageSize)}</p>
               <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark mx-4" onClick={this.handleNextClick}>Next<img className="mx-1" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-right.png" alt="arrow"/></button>
             </div> */}
        </div>
        </>
    );

}


News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general"
}
News.propTypes = {
 country: PropTypes.string,
 pageSize: PropTypes.number,
 category: PropTypes.string
}

export default News;
