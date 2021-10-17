import React from 'react'
import styles from './Logo.module.css'
import {FaFilm} from "react-icons/fa"

const Logo = () => {
    return (
        <div className={styles.brandContainer}>
            <FaFilm className={styles.logo}/>
        </div>
    )
}

export default Logo
