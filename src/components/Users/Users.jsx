import classes from "./Users.module.css";
import photo from "../../img/logo.png";
import * as axios from "axios";

const Users = ({ usersData, isFollow, isUnfollow, setUsers }) => {

  if (usersData.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      console.log(response.data.items);
      setUsers(response.data.items)
    })
  }

  return (
    <div className={classes.users}>
      {/* <div className={classes.page_lists}></div> */}
      {usersData.map((item) => (
        <div className={classes.users__item} key={item.id}>
          <div className={classes.users__follow}>
            <img src={item.photos.large || photo} alt='' />
            {item.followed ? (
              <button
                onClick={() => {
                  isUnfollow(item.id);
                }}
                className={classes.users__btn}>
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  isFollow(item.id);
                }}
                className={classes.users__btn}>
                Follow
              </button>
            )}
          </div>
          <div className={classes.users__info}>
            <div>
              <div className={classes.info__description}>{item.name}</div>
              <div className={classes.info__description}>{item.status}</div>
            </div>
            <div>
              <div className={classes.info__description}>{"item.location.country"}</div>
              <div className={classes.info__description}>{"item.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
