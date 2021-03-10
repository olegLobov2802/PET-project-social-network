import classes from "./Users.module.css";
import photo from "../../img/photo.jpg";

const Users = ({ usersData }) => {
  return (
    <div className={classes.users}>
      {/* <div className={classes.page_lists}></div> */}
      {usersData.map((item) => (
        <div className={classes.users__item} key={item.id}>
          <div className={classes.users__follow}>
            <img src={photo} alt='' />
            {item.isFollow ? (
              <button className={classes.users__btn}>Unfollow</button>
            ) : (
              <button className={classes.users__btn}>Follow</button>
            )}
          </div>
          <div className={classes.users__info}>
            <div>
              <div className={classes.info__description}>{item.userName}</div>
              <div className={classes.info__description}>{item.status}</div>
            </div>
            <div>
              <div className={classes.info__description}>{item.location.country}</div>
              <div className={classes.info__description}>{item.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
