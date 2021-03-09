import React from "react";
import classes from "./Frends.module.css";
import FrendsItem from "./FrendsItem/FrendsItem";

const Frends = ({ sidebar }) => {
  let frendsElements = sidebar.frends.map((item) => <FrendsItem key={item.id} name={item.name} />);

  return (
    <div className={classes.frends}>
      <div className={classes.frends__wrapper}>
        <div className={classes.frends__title}>Frends</div>
        <ul className={classes.frends__list}>{frendsElements}</ul>
      </div>
    </div>
  );
};

export default Frends;
