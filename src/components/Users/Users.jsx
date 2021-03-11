import classes from "./Users.module.css";
import photo from "../../img/photo.jpg";

const Users = ({ usersData, isFollow, isUnfollow, setUsers }) => {
  let users = [
    {
      id: 1,
      userName: "Oleg",
      status: "Hello World",
      location: {
        country: "Russia",
        city: "Abakan",
      },
      photo: photo,
      follow: true,
    },
    {
      id: 2,
      userName: "Anna",
      status: "Hello World",
      location: {
        country: "Russia",
        city: "Abakan",
      },
      photo: photo,
      follow: false,
    },
    {
      id: 3,
      userName: "Dimon",
      status: "Hello World",
      location: {
        country: "Russia",
        city: "Abakan",
      },
      photo: photo,
      follow: true,
    },
  ];

  if (usersData.length === 0) {
    setUsers(users);
  }

  return (
    <div className={classes.users}>
      {/* <div className={classes.page_lists}></div> */}
      {usersData.map((item) => (
        <div className={classes.users__item} key={item.id}>
          <div className={classes.users__follow}>
            <img src={photo} alt='' />
            {item.follow ? (
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
