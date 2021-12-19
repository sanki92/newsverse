import React, { Component } from 'react'
import $ from "jquery";

export class Footer extends Component{
    componentDidMount(){
        $(function() {
            $(".static").hover(
                function() {$(this).attr("src", "https://img.icons8.com/color/96/000000/twitter--v2.gif");},
                function() {$(this).attr("src", "https://img.icons8.com/color/96/000000/twitter--v2.png");}                         
            ); 
            $(".static2").hover(
                function() {$(this).attr("src", "https://img.icons8.com/color/48/000000/linkedin-2--v2.gif");},
                function() {$(this).attr("src", "https://img.icons8.com/color/48/000000/linkedin-2--v2.png");}                         
            );    
            $(".static3").hover(
                function() {$(this).attr("src", "https://img.icons8.com/color/48/000000/github--v3.gif");},
                function() {$(this).attr("src", "https://img.icons8.com/color/48/000000/github--v3.png");}                         
            );                     
        });
    }

render(){
     return(
         <div className="container footer">
                  <div className="container media">
            <a href="https://twitter.com/Sankalpt_92"><img className="static" src="https://img.icons8.com/color/96/000000/twitter--v2.png" alt="twitter"/></a>
            <a href="https://www.linkedin.com/in/sankalp-tripathi-53b7b61b5/"><img className="static2" src="https://img.icons8.com/color/48/000000/linkedin-2--v2.png" alt="linkedin"/></a>
            <a href="https://github.com/sanki92"><img className="static3"src="https://img.icons8.com/color/48/000000/github--v3.png" alt="github"/></a>
                 </div>   
                 <p>Created with ❤ by Sankalp Tripathi</p>
         </div>

     )
}
} 