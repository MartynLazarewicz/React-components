import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const { friend, status, online, offline, friend__avatar, friend__name } =
    styles;

  return (
    <li className={friend}>
      <span className={`${status} ${isOnline ? online : offline}`}></span>
      <img
        className={friend__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friend__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
