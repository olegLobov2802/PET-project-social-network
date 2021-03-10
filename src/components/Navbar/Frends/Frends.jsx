import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

export const FrendsContainer = connect(mapStateToProps)(Frends);
