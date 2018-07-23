import React from 'react';
import './board.css';

import GuessForm from './guess-form';
import GuessMeter from './guess-meter';
import Guesses from './guesses';
import GameInfo from './game-info';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '101',
            guesses: [],
            number: Math.floor((Math.random() * 100) + 1).toString()
          
        };
    }
 

  handleFormSubmit = (event, userGuess) => {
      event.preventDefault();
    this.setState({ guesses: [...this.state.guesses, userGuess] });
    this.setState({guess: userGuess});
}

 handleWarmth = (userGuess)=> {
    
    console.log(" the number is", this.state.number);
    let feedback = '';
    const correctNumber = this.state.number;

    console.log("guess length", this.state.guesses.length);
    if(this.state.guess === '101') {
        feedback="Make your guess!";
    }
    else if (userGuess === correctNumber) {
        feedback="You Won. Click new game to play again";   
    } else if (Math.abs(correctNumber - userGuess) < 11) {
        feedback="Hot";
    } else if (Math.abs(correctNumber - userGuess) < 21) {
        feedback="Kinda hot";
    } else  {
        feedback="Cold";
    }

    return feedback;

 }

    
showGameInfo() {
    document.getElementById("game-info").classList.remove("hidden");
}

startNewGame(event) {
    this.setState({
        guess: '101',
        guesses: [],
        number: Math.floor((Math.random() * 100) + 1).toString()
    });
}


    render() {
        return (
            <div className="main_board">
                <header>
                    <nav className="main_board-nav">
                        <button onClick={this.showGameInfo}>WHAT?</button>
                        <button onClick={this.startNewGame.bind(this)}>+NEW GAME</button>
                    </nav>
                    <h1>HOT or COLD</h1>
                </header>
                <div className="game-card">
                    <div className="feedback">
                        <h2>{this.handleWarmth(this.state.guess)}</h2>
                    </div>
                    <GuessForm formSubmit={this.handleFormSubmit} guesses={this.state.guesses} />
                    <GuessMeter guesses={this.state.guesses}/>
                    <Guesses guesses={this.state.guesses}/>
                    <GameInfo />
                </div>
            </div>
        );
    }
}   