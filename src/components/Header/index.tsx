import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/logo.png" alt="" />
      <p className={styles.headerTitle}>This is an application for the Zippia Front End Challenge Code :)</p>
    </header>
  )
}
