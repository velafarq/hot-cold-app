import React from 'react';
import './game-info.css';

export default function GameInfo(props) {

    function closeGameInfo() {
        document.getElementById("game-info").classList.add("hidden");
    }

    return (
        <div className="what-container hidden" id="game-info">
       
        <section className="content-box">
        <h3>What do I do?</h3>
        <div className="content">
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
            <ul>
                <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                <li>2. You need to <strong>guess</strong>  until you can find the hidden secret number.</li>
                <li>3. You will <strong>get feedback</strong>  on how close ("hot") or far ("cold") your guess is.</li>
            </ul>
            <p>So, Are you ready?</p>
            <a className="close" href="#" onClick={closeGameInfo}>Got It!</a>
        </div>
        </section>
        </div>

    );
}