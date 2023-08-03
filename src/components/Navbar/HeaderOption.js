import React from "react";
import "../../styles/headerOption.scss";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoURL ? user.photoURL : ""} >
        {user?.email ? user.email[0].toUpperCase() : 'A'}
        </Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
