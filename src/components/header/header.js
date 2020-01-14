import React, { useState } from 'react';
import './header.css';
import { FocusInput } from '../focus-input';

      
const Header = props => {
    const inputClasses = `control-input${ props.hasKeyError? ' error-key' : '' }`;
    const inputDefaultValue = props.keyAPI || '';

    const [ keyAPI, setKeyAPI ] = useState( inputDefaultValue );
    
    const handleChange = event => {
        setKeyAPI( event.target.value );
    }

    const handleSubmit = event => {
        event.preventDefault();

        if ( keyAPI.length >= 32 ) {
            props.onKeyEntered( keyAPI );
        }
    }


    return (
        <header className="header">
            <h1>{ props.name }</h1>
            <form
                className="key-form"
                onSubmit={ handleSubmit }
            >
                <label>API key:</label>
                <FocusInput
                    classes = { inputClasses }
                    placeholder = "Your themoviedb.org API Key (v3 auth)"
                    onChange = { handleChange }
                    name = "themoviedb_api_key"
                    value = { keyAPI }
                ></FocusInput>
                <input
                    className="control-button"
                    type="submit"
                    value="Enter"
                />
            </form>
        </header>
    );
}

export default Header;