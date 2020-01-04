import React from "react";

import {withRouter} from 'react-router-dom';// higher outer component is a function that takes any component, modifies and then returns it (like a power up component) 


import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})` // dynamically make style in our component
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
