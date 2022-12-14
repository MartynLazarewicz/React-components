import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const { friend__list } = styles;

  return (
    <section>
      <ul className={friend__list}>
        {friends.length > 0 &&
          friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
