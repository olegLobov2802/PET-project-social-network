import classes from "./Users.module.css";
import photo from "../../img/photo.jpg";

const Users = () => {
  return (
    <div className={classes.users}>
      {/* <div className={classes.page_lists}></div> */}
      <div className={classes.users__item}>
        <div className={classes.users__follow}>
          <img src={photo} alt='' />

          <button className={classes.users__btn}>Unfollow</button>
          <button className={classes.users__btn}>Follow</button>
        </div>
        <div className={classes.users__info}>
          <div>
            <div className={classes.info__description}>{"item.name"}</div>
            <div className={classes.info__description}>{"item.status"}</div>
          </div>
          <div>
            <div className={classes.info__description} >{"item.location.country"}</div>
            <div className={classes.info__description} >{"item.location.city"}</div>
          </div>
        </div>
      </div>

      <div className={classes.users__item}>
        <div className={classes.users__follow}>
          <img src={photo} alt='' />

          <button className={classes.users__btn}>Unfollow</button>
          <button className={classes.users__btn}>Follow</button>
        </div>
        <div className={classes.users__info}>
          <div>
            <div className={classes.info__description}>{"item.name"}</div>
            <div className={classes.info__description}>{"item.status"}</div>
          </div>
          <div>
            <div className={classes.info__description} >{"item.location.country"}</div>
            <div className={classes.info__description} >{"item.location.city"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
