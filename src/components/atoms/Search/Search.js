
import React from 'react'
import { useState } from 'react'
import styles from './Search.module.css'

const Search = () => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value)
    }
    
    return (
        <>
            <form className={styles.form}>
                <input type='text' onChange={handleChange} value={input} className={styles.input} placeholder='Búsqueda'></input>
            </form>
        </>
    )
}

export default Search;

