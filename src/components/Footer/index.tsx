import React from 'react'
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logo.png" alt="" />
      <p className={styles.footerTitle}>This is an application for the Zippia Front End Challenge Code :)</p>
    </footer>
  )
}
