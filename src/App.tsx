import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

function Board() {
  const [marks, setMarks] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false); // State to track a draw

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWinner();
  }, [marks]);

  const checkWinner = () => {
    for (let combination of winCombinations) {
      const [a, b, c] = combination;
      if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
        setWinner(marks[a]);
        return;
      }
    }
    // Check for draw: if all cells are filled and there's no winner
    if (!marks.includes(null)) {
      setDraw(true);
    }
  };

  const changeMark = (i) => {
    if (marks[i] || winner || draw) return;

    const newMarks = [...marks];
    newMarks[i] = player;
    setMarks(newMarks);
    setPlayer(player === "X" ? "O" : "X");
  };

  return (
    <div className="Board">
      <h2>
        {winner
          ? `🎉 Player ${winner} Wins!`
          : draw
          ? "It's a Draw!"
          : `Player ${player}'s Turn`}
      </h2>
      <div className="grid">
        {marks.map((mark, i) => (
          <Block key={i} mark={mark} position={i} changeMark={changeMark} />
        ))}
      </div>
      {(winner || draw) && (
        <button onClick={() => window.location.reload()}>Restart</button>
      )}
    </div>
  );
}

function Block({ mark, changeMark, position }) {
  return (
    <div className="Block" onClick={() => changeMark(position)}>
      {mark}
    </div>
  );
}

export default App;
