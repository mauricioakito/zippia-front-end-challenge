import React from 'react'
import styles from './Message.module.scss';
import { useStore } from '../../store/useStore';

export const Message = () => {

  const {statusCode, fetchUsers} = useStore()

  const statusMessages: { [key: string]: string } = {
    301: 'The resource has been moved permanently.',
    401: 'Unauthorized: You need to provide valid authentication credentials.',
    403: 'Forbidden: You do not have permission to access this resource.',
    404: 'Not Found: The requested resource could not be found.',
    500: 'Internal Server Error: Something went wrong on the server side.',
    503: 'Service Unavailable: The server is temporarily unable to handle requests.',
  };

  const message = statusMessages[statusCode] || '';

  return (
    fetchUsers && statusCode !== 200 && (
      <div className={styles.messageContainer}>
        <p className={styles.messageTitle}>Message:</p>
        <p className={styles.message}>{message}</p>
      </div>
    )
  );
};
