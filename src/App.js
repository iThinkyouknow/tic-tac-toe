import { useState } from 'react';
import './App.css';

const chars = ['', 'X', 'O'];

const genDefaultGrid = () => {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => 0));
};

export const checkVictory = (grid, y, x, currentPlayerNumber) => {
  const row = grid[y];

  const col = grid.map(row => row[x]);

  if ([row, col].some(arr => arr.every(num => num === currentPlayerNumber))) return true;

  const diagonalWin = [[0, 1, 2], [2, 1, 0]].some(arr => {
    return arr.every((y1, x1) => {
      return grid[y1][x1] === currentPlayerNumber;
    });
  });

  if (diagonalWin) return true;

  return false;
};

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(true);
  let [grid, setGrid] = useState(genDefaultGrid());
  const [victory, setVictory] = useState(false);

  const currentPlayerNumber = currentPlayer
    ? 1
    : 2;

  const onClickBtn = (y, x) => () => {
    grid[y][x] = currentPlayerNumber;
    const isVic = checkVictory(grid, y, x, currentPlayerNumber);

    if (isVic) {
      setVictory(isVic);
    } else {
      setCurrentPlayer(!currentPlayer);
    }
    setGrid([...grid]);
  };

  const reset = () => {
    setGrid(genDefaultGrid());
    setCurrentPlayer(true);
    setVictory(false);
  }
  return (
    <div className="App">
      <div class='flex items-center'>
        <div className='flex-col'>
          {
            grid.map((arr, y) => {
              return (
                <div className='flex'>
                  {
                    arr.map((int, x) => {
                      return (
                        <button
                          key={`${y}${x}`}
                          onClick={onClickBtn(y, x)}
                          disabled={int || victory}
                          className='tic-tac-toc-btn'>
                          {chars[int]}
                        </button>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <p class='player-label margin-left-16px font-size-50px flex flex-col'>
          <span>Player {currentPlayerNumber}</span>
          {
            victory && <span>Is Victorious!</span>
          }
        </p>

        <button
          className='reset-btn'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
