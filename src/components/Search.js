
import React from 'react'
import { useState } from 'react'
import ListadoPeliculas from './ListadoPeliculas'


const Search = () => {
    
const [input, setInput] = useState('')

/* const history = useHistory() */

const handleSubmit = (e) => {
   e.preventDefault();
 /*   history.push(`?search=${input}`) */
   setInput('');
}

const handleChange = (e) => {
    setInput(e.target.value);
}


    return (
     <>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={input}></input>
            <button type='submit'>Buscar</button>
        </form>
        <ListadoPeliculas search={input}/>
     </>
    )
}

export default Search

