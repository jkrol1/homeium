import React from 'react';
import './Notification.scss';

const Notification = ({ message, toggleNotification }) => (
    <div className='Notification' >
        <p className='Notification__message'>{message}</p>
        <span onClick={() => toggleNotification()}
            className='Notification__close-notification-symbol'>&#10005;</span>
    </div >
);

export default Notification;