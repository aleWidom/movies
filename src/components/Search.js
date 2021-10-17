
import React from 'react'
import { useState } from 'react'
import MovieList from './MovieList'
import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa"

const Search = () => {

    const [input, setInput] = useState('')

    /* const history = useHistory() */

    const handleSubmit = (e) => {
        e.preventDefault();
        /*   history.push(`?search=${input}`) */
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value)
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type='text' onChange={handleChange} value={input} className={styles.input}></input>
                <button type='submit' className={styles.button}><FaSearch /></button>
            </form>
            <MovieList search={input} />
        </div>
    )
}

export default Search

