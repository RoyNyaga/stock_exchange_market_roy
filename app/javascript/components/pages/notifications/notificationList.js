import React from 'react';
import styled from 'styled-components';
import Notification from './notification';

const NotificationList = ({ notifications }) => {
  return <Wrapper>
      <h4 className="text-center text-white py-5"><span className="notification-heading">{notifications.length}</span> Notifications</h4>
    { notifications.length > 0 ? notifications.map(notification => {
      return <Notification key={notification.id} notification={notification} />
    }) : null 
    }
  </Wrapper>;
}

const Wrapper = styled.div`
  .notification-heading{
    color: orange;
  }
`

export default NotificationList;
