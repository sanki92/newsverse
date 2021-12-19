import React, {  } from "react";

const About =(props)=> {
  if(document.readyState === 'ready' || document.readyState === 'complete') {
    props.setProgress(100)
  } else {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        props.setProgress(30)
      }
    }
  }
    return (
      <>
      {document.title="Newsverse- [ About ]"}{document.body.style.background="linear-gradient(90deg, #1CB5E0 0%, #000851 100%)"}
        <div className="container about">
          <img src="./images/3d-flame-285.png" alt="about" />
          <h1>ABOUT</h1>
          <p>
            Newsverse is an independent, nonprofit media organization that was founded
            on a mission to create a more informed public. Every day, Newsverse
            connects with millions of Americans on the air, online, and in
            person to explore the news, ideas, and what it means to be human.
            Through its network of member stations, Newsverse makes local stories
            national, national stories local, and global stories personal.
          </p>
        </div>     
    
      </>

    )
}

export default About;
