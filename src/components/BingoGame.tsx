import React, { useState } from 'react';
import axios from 'axios';
import './css/bingo.css'

const BINGO_URL = 'http://www.hyeumine.com/bingodashboard.php';
const GET_CARD_URL = 'http://www.hyeumine.com/getcard.php';
const CHECK_WIN_URL = 'http://www.hyeumine.com/checkwin.php';

const BingoGame: React.FC = () => {

  const [gameCode, setGameCode] = useState('');
  const [playCardToken, setPlayCardToken] = useState('');
  const [bingoCard, setBingoCard] = useState({});

  const joinGame = async (gameCode: string) => {
    setBingoCard({})
    const res = await axios.get(`${BINGO_URL}?bcode=${gameCode}`);
    if (res.data) {
      setGameCode(gameCode);
    }

  }

  const getCard = async () => {
    const res = await axios.get(`${GET_CARD_URL}?bcode=${gameCode}`);
    if (res.data && res.data.playcard_token) {
      setPlayCardToken(res.data.playcard_token);
      setBingoCard(res.data);
    }
  }

  const checkWin = async () => {
    const res = await axios.get(`${CHECK_WIN_URL}?playcard_token=${playCardToken}`);
    if (res.data) {
      alert(`You won! ${res.data}`);
    } else {
      alert('Sorry, not a winning card');
    }
  }

  return (
    <div>

      <h1>REST BINGO</h1>

      <div>

        <label>
          <input placeholder='Enter Game Code' className='gcode' type="text" value={gameCode} onChange={e => setGameCode(e.target.value)} />
        </label>

        <button className='butt' onClick={() => joinGame(gameCode)}>Join Game</button>
        
      </div>

      <br></br>

      <div>
        <button className='butt' onClick={getCard}>Get Card</button>
        <button className='butt' onClick={checkWin}>Check Win</button>
      </div>

      <br></br>

      <div className='details'>
        {bingoCard && JSON.stringify(bingoCard)}
      </div>

    </div>
  );
}

export default BingoGame;