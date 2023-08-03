import React from "react";
import "../../styles/homepage.scss";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Homepage;
