
import React from 'react'
import { useState } from 'react'

const Search = () => {

const [input, setInput] = useState('')
    
const handleSubmit = (e) => {
   e.preventDefault();
   setInput('');
}

const handleChange = (e) => {
    setInput(e.target.value);
}

console.log(input)

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={input}></input>
            <button type='submit'>Buscar</button>
        </form>
    )
}

export default Search

