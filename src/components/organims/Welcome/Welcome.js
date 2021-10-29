import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import { Link } from "react-router-dom";
import styles from './Welcome.module.css'
import Footer from '../Footer/Footer';

const Welcome = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerInto}>
        <Logo className={styles.logo} />
        <Link className={styles.link} to="/movies">Get Started</Link>
       </div>
      <Footer/>
    </div>
  )
}

export default Welcome
