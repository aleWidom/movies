import React from 'react'
import Logo from './Logo'
import styles from './Header.module.css'

const Header = () => {
    return (
      <div className={styles.container}>
           <Logo/>
      </div>
    )
}

export default Header
