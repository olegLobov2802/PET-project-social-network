import React from "react";
import classes from "./Friends.module.css";
import FrendsItem from "./FrendsItem/FrendsItem";

const Friends = () => {
  let sidebar = {
    friends: [
      {
        id: 1,
        name: "Oleg",
      },
      {
        id: 2,
        name: "Anna",
      },
      {
        id: 3,
        name: "Denis",
      },
      {
        id: 4,
        name: "Sergey",
      },
    ],
  };

  let friendsElements = sidebar.friends.map((item) => <FrendsItem name={item.name} />);

  return (
    <div className={classes.friends}>
      <div className={classes.friends__wrapper}>
        <div className={classes.friends__title}>Friends</div>
        <ul className={classes.friends__list}>{friendsElements}</ul>
      </div>
    </div>
  );
};

export default Friends;
