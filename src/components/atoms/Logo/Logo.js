import React from 'react'
import styles from './Logo.module.css'
import {FaFilm} from "react-icons/fa"

const Logo = () => {
    return (
            <FaFilm className={styles.logo}/>
    )
}

export default Logo;
