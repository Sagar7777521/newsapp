import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor");
  }
  render() {
    return (
      <div className="container my-3">
        <h2>TOP HEADLINES</h2>
        <div className="Row">
          <div className="col-md-4">
            <Newsitem
              tittle="Title"
              description="My Description"
              imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2023821/cr_1200x1200-230921182654-GettyImages-1202825298.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
            />
          </div>

          <div className="col-md-4">
            <Newsitem tittle="Title" description="My Description" />
          </div>
          <div className="col-md-4">
            <Newsitem tittle="Title" description="My Description" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
