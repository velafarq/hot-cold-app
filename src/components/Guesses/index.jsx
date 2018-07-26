import React from 'react';
import './guesses.css';

export default function Guesses(props) {
    const { guesses } = props;
    
    return (
        <div className="guess-box">
            <ul>{guesses.map((guess, index) => <li key={index}>{guess}</li>)}</ul>
        </div>
    );
}
