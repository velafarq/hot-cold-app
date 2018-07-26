import React from 'react';
import './board.css';

import GuessForm from '../GuessForm/index';
import GuessMeter from '../GuessMeter/index';
import Guesses from '../Guesses/index';
import GameInfo from '../GameInfo/index';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            correctNumber: Math.floor((Math.random() * 100) + 1),
            showInfo: false,
            warmthMessage: 'Make your guess',
        };
    }
 

  handleFormSubmit = (event, userGuess) => {
      event.preventDefault();
      const { guesses } = this.state;

      for (let guess of guesses) {
        if(guess === userGuess) {
          alert('You guessed this number already.')
        }
      } 

    this.setState({ guesses: [...guesses, userGuess] }, () => {
        this.handleWarmth(userGuess);
    });
};

 handleWarmth = (userGuess)=> {
    
    const {correctNumber} = this.state;
  
    if (userGuess === correctNumber) {
        this.setState({ warmthMessage: 'You Won. Click new game to play again' });
    } else if (Math.abs(correctNumber - userGuess) < 11) {
        this.setState({ warmthMessage: 'Hot' });
    } else if (Math.abs(correctNumber - userGuess) < 21) {
        this.setState({ warmthMessage: 'Kinda hot' });
    } else  {
        this.setState({ warmthMessage: 'Cold' });
    }
 };

startNewGame = event => {
    this.setState({
        guesses: [],
        correctNumber: Math.floor((Math.random() * 100) + 1),
        showInfo: false,
        warmthMessage: 'Make your guess',
    });
};

toggleInfo = () => {
    const showInfo = this.state.showInfo
    this.setState({ showInfo: !showInfo });
}

    render() {
        const { guesses, showInfo, warmthMessage } = this.state;
        return (
            <div className="main_board">
                <header>
                    <nav className="main_board-nav">
                        <button onClick={this.toggleInfo}>WHAT?</button>
                        <button onClick={this.startNewGame}>+NEW GAME</button>
                    </nav>
                    <h1>HOT or COLD</h1>
                </header>
                <div className="game-card">
                    <div className="feedback">
                        <h2>{warmthMessage}</h2>
                    </div>
                    <GuessForm formSubmit={this.handleFormSubmit} guesses={guesses} />
                    <GuessMeter guesses={guesses}/>
                    <Guesses guesses={guesses}/>
                    {showInfo && <GameInfo toggleInfo={this.toggleInfo} />}
                </div>
            </div>
        );
    }
}   