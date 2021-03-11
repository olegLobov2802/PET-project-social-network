import classes from "./Users.module.css";
import photo from "../../img/logo.png";

const Users = ({
  usersData,
  isFollow,
  isUnfollow,
  onPageChange,
  totalUsersCount,
  usersCount,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / usersCount);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.users}>
      <div className={classes.page_lists}>
        {pages.map((item) => (
          <span
            key={item}
            onClick={() => {
              onPageChange(item);
            }}
            className={currentPage === item ? classes.item_active : classes.page_lists__item}>
            {item}
          </span>
        ))}
      </div>
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
