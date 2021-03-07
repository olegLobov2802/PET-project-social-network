import React from "react";
import photo from "../../../../img/photo.jpg";
import classes from './FrendsItem.module.css'

const FrendsItem = (props) => {
  return (
    <li className={classes.friends__item}>
      <div className={classes.friends__photo}>
        <img src={photo} alt='' />
      </div>
      <div className={classes.friends__name}>{props.name}</div>
    </li>
  );
};

export default FrendsItem;
