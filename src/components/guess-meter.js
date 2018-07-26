import React from 'react';
import './guess-meter.css';

export default function GuessMeter(props) {
const length = props.guesses.length;
    return (
        <div>
            <p className="guess-meter">
                Guess #<span className="guess-count">{length}</span>!
            </p>
        </div>
    );
}