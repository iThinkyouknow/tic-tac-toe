
import { checkVictory } from './App';

test('check victory conditions', () => {
  [
    {
      grid: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
      ],
      y: 0,
      x: 2,
      currPlayer: 1,
      result: true,
    },
    {
      grid: [
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 1]
      ],
      y: 1,
      x: 1,
      currPlayer: 1,
      result: true,
    },
    {
      grid: [
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 1]
      ],
      y: 2,
      x: 2,
      currPlayer: 1,
      result: true,
    },
    {
      grid: [
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 0]
      ],
      y: 2,
      x: 2,
      currPlayer: 1,
      result: false,
    },
    {
      grid: [
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
      y: 1,
      x: 0,
      currPlayer: 1,
      result: true,
    },
    {
      grid: [
        [1, 2, 1],
        [1, 2, 1],
        [0, 2, 0]
      ],
      y: 2,
      x: 1,
      currPlayer: 2,
      result: true,
    },
    {
      grid: [
        [1, 0, 2],
        [1, 0, 2],
        [0, 1, 2]
      ],
      y: 0,
      x: 2,
      currPlayer: 2,
      result: true,
    },
    {
      grid: [
        [1, 0, 2],
        [1, 0, 2],
        [0, 1, 2]
      ],
      y: 0,
      x: 2,
      currPlayer: 1,
      result: false,
    }
  ].forEach(({ grid, y, x, currPlayer, result }) => {
    expect(checkVictory(grid, y, x, currPlayer)).toBe(result);
  })
});