import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {        
        setinputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); //prevenir postback      
        if ( inputValue.trim().length > 2 ){
            //setCategories([inputValue,...categories])
            setCategories( cats => [inputValue,...cats] );
            setinputValue('');

        }        
        
    }

    return (
        <form onSubmit={handleSubmit}>            
            <input
                type="text" 
                value = {inputValue}
                onChange={ handleInputChange }
            ></input>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}