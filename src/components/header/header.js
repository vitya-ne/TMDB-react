import React, { useState } from 'react';
import './header.css';

      
const Header = props => {
    const [ keyAPI, setKeyAPI ] = useState( '' );
    
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
                <input
                    className={ `control-input
                        ${ props.hasKeyError? 'error-key' : '' }
                    ` }
                    placeholder="Your themoviedb.org API Key (v3 auth)"
                    onChange={ handleChange }
                    type="text"
                    name="themoviedb_api_key"
                    value={ keyAPI }
                />
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