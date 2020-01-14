import React from "react";
import MyWindowScroller from "./window-scroller";

import "./flex.css";
import "./App.css";

export default ({ data }) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Header</h2>
      </div>

      <div className="App-intro">
        <div className="WindowScrollerWrapper">
          <MyWindowScroller data={data} />
        </div>
      </div>
      <div className="App-footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
};
