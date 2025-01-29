import { useState } from "react";
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
  const [marks, setmarks] = useState([0,0,0,0,0,0,0,0,0]);
  const [player, setPlayer] = useState(1);

  const changeMark = (i) => {
    const m = [...marks];
    if(m[i]===0){
      m[i] = player;  
      setmarks(m);
      setPlayer(player===1 ? 2:1);
    }else{
      alert('Please click on empty block')
    }

  }
  return (
    <div className="Board">
      <div>
      <Block mark = {marks[0]} position = {0} changeMark = {changeMark} />
      <Block mark = {marks[1]} position = {1} changeMark = {changeMark} />
      <Block mark = {marks[2]} position = {2} changeMark = {changeMark} />
      </div>
      <div>
      <Block mark = {marks[3]} position = {3} changeMark = {changeMark} />
      <Block mark = {marks[4]} position = {4} changeMark = {changeMark} />
      <Block mark = {marks[5]} position = {5} changeMark = {changeMark} />
      </div>
      <div>
      <Block mark = {marks[6]} position = {6} changeMark = {changeMark} />
      <Block mark = {marks[7]} position = {7} changeMark = {changeMark} />
      <Block mark = {marks[8]} position = {8} changeMark = {changeMark} />
      </div>    
    </div>
  );
}

function Block({mark, changeMark, position}) {
  return (
  <div className={`Block mark${mark}`}
            onClick={e=>changeMark(position)} >

  </div>
  
  );
}

export default App;
