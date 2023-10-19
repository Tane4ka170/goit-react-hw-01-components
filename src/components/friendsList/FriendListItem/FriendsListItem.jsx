import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css'

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
     <li className={s.item}>
      <span
        className={`${s.status} ${
          isOnline !== false ? s.offline : s.online
        }`}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  )
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};