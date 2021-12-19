import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Footer } from './components/Footer';

const App=()=> {
 const apiKey=process.env.REACT_APP_NEWS_API;

 const [progress, setProgress] = useState(0)




    
    return (
      <>
            <Router>
            <LoadingBar
              color='#ffff'
              height={3}
              progress={progress}
              
            />
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress}  apiKey={apiKey}  key="general" pageSize={6} country="in" category="general"/>} />
             <Route exact path="/about" element={<About  setProgress={setProgress}  category=""/>} />
              <Route exact path="/general" element={<News setProgress={setProgress}  apiKey={apiKey}  key="general" pageSize={6} country="in" category="general"/>} />
              <Route exact path="/business" element={<News setProgress={setProgress}  apiKey={apiKey}  key="business" pageSize={6} country="in" category="business"/>} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey}  key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
              <Route exact path="/health" element={<News setProgress={setProgress}  apiKey={apiKey}  key="health" pageSize={6} country="in" category="health"/>} />
              <Route exact path="/science" element={<News setProgress={setProgress}  apiKey={apiKey}  key="science" pageSize={6} country="in" category="science"/>} />
              <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey}  key="sports" pageSize={6} country="in" category="sports"/>} />
              <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey}  key="technology" pageSize={6} country="in" category="technology"/>} />
            </Routes>
            <Footer/>
            </Router>
      </>
    )
}

export default App;