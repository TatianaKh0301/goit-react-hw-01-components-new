import PropTypes from 'prop-types';

import { FriendWrap, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendWrap>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </FriendWrap>            
        );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};