import "./App.css"
const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board></Board>
    </div>
  );
};

function Board() {
  return (
    <div className="Board">
      <div>
      <Block></Block>
      <Block></Block>
      <Block></Block>
      </div>
      <div>
      <Block></Block>
      <Block></Block>
      <Block></Block>
      </div>
      <div>
      <Block></Block>
      <Block></Block>
      <Block></Block>
      </div>
    </div>
  );
}

function Block() {
  return (
  <div className="Block  cross">

  </div>
  );
}

export default App;
