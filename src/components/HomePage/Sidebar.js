import React from "react";
import "../../styles/sidebar.scss";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <Avatar
          src={user.photoURL ? user.photoURL : ""}
          className="sidebar__avatar"
        >
          {user.email ? user.email[0] : 'A'}
        </Avatar>
        <h2>{user.displayName ? user.displayName : "another person"}</h2>
        <h4>{user.email ? user.email : "another@email.com"}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2587</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2488</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("programming")}
        {recentItem("dsa")}
        {recentItem("engineering")}
      </div>
    </div>
  );
}

export default Sidebar;
