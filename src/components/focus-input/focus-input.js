import React, { useEffect, useRef } from 'react';

const FocusInput = props => {
    const inputElem = useRef( null );

    useEffect(
        () => {
            const { current } = inputElem;

            if ( current.value === '' ) {
                current.focus();
            }            
        }, []
    );

    return (
        <input
            className = { props.classes }
            placeholder = { props.placeholder }
            onChange = { props.onChange }
            type = "text"
            name = { props.name }
            value = { props.value }
            ref = { inputElem }
        />
    )
}

export default FocusInput;