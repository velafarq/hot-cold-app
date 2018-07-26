import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
    const inputRef = React.createRef();
    const handleFormSubmit = e => {
        e.preventDefault();
        const userGuess = parseInt(inputRef.current.value);
        props.formSubmit(e, userGuess);
        document.getElementById("form").reset();
    };

    return (
        
        <div>
            <form className="guess-form" onSubmit={handleFormSubmit} id="form">
                <input name="test" className="guess-input" type="number" step="any" min="1" max="100" autoComplete="off" placeholder="Enter your Guess"  ref={inputRef} required/>
                <input className="guess-button" type="submit" name="submit" value="Guess" />
            </form>
        </div>
    );
}


