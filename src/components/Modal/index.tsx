/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import classNames from 'classnames'
import { useStore } from '../../store/useStore';
import { useModalFilter } from '../../hooks/useModalFilter';
import {_Maybe} from 'funcio'

export const Modal = () => {

  const { modalState, setModalState } = useStore();
  const { filterSelectedUser } = useModalFilter()

  const handleBody = () => {
    const body = document && document.querySelector('body')
    if (body && modalState) {
      body.classList.add(`${styles.modalActive}`)
    } else {
      body.classList.remove(`${styles.modalActive}`)
    }
  }

  useEffect(() => {
    handleBody()
  }, [modalState])
  

  if (!filterSelectedUser) return null

  const results = _Maybe
  .of(filterSelectedUser)
  .map((filterSelectedUser) => filterSelectedUser.length > 0 && filterSelectedUser[0])
  .map((data) => data)
  .getOrElse([])

  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
    },
    phone,
    website,
    company: {
      name: companyName,
    }
  } = results

  if (!results) return null

  return (
    <div className={classNames(styles.modal, {
      [styles.isOpen]: modalState
    })}>
      <div className={styles.modalBox}>
        <span className={styles.closeButton} onClick={() => setModalState(false)}>X</span>
        <h2>User information</h2>
        <div className={styles.modalBody}>
          <p>Name: <br/>{name}</p>
          <p>Username: <br/>{username}</p>
          <p>Email: <br/>{email}</p>
          <p>Street: <br/>{street}</p>
          <p>Suite: <br/>{suite}</p>
          <p>City: <br/>{city}</p>
          <p>Zipcode: <br/>{zipcode}</p>
          <p>Phone: <br/>{phone}</p>
          <p>Website: <br/>{website}</p>
          <p>Company Name: <br/>{companyName}</p>
        </div>
      </div>
      <div className={styles.modalOverlay}></div>
    </div>
  )
}
