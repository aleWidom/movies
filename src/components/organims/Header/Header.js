import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import Search from '../../atoms/Search/Search'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo/>
      <Search/>
    </div>
  )
}

export default Header
