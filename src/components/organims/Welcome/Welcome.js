import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import { Link } from "react-router-dom";
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wallpaper}>
       <div className={styles.containerInto}>
        <Logo className={styles.logo} />
        <Link className={styles.link} to="/movies">Get into!</Link>
       </div>
      </div>
    </div>
  )
}

export default Welcome
