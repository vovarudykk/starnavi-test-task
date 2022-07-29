import { useEffect, useState, useRef } from "react";
import "./App.css";
import ListPickedSquares from "./components/ListPickedSquares";
import ListSquares from "./components/ListSquares";
import fetchPresets from "./fetch/fetchPresets";
import useAsync from "./hooks/useAsync";
import ModeContext from "./store/ModeContext";

function App() {
  //useAsync for handle fetch status, value and errors
  const { execute, status, value, error } = useAsync(fetchPresets, false);
  //check render
  const didMount = useRef(false);
  const [countOfSquares, setCountOfSquares] = useState(5);
  const [mode, setMode] = useState("hover");
  //array of object (squares props)
  const [squares, setSquares] = useState({});

  //set default value to squares array
  const initSquares = () => {
    let squares = [];
    for (let i = 0; i < countOfSquares; i++) {
      squares.push({
        id: i,
        name: `row ${parseInt(i / 5) + 1} col ${i < 5 ? i + 1 : (i % 5) + 1}`,
        color: "white",
        isPicked: false,
      });
    }
    setSquares(squares);
  };

  const handleChangeCountOfSquares = (count) => {
    setCountOfSquares(count);
  };

  const handleChangeMode = (mode) => {
    setMode(mode);
  };

  const pickSquare = (newSquare) => {
    setSquares(
      squares.map((square) => (square.id !== newSquare ? square : newSquare))
    );
  };

  const unpickSquare = (removeSquare) => {
    setSquares(
      squares.map((square) =>
        square.id !== removeSquare ? square : removeSquare
      )
    );
  };

  //request to server
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    execute();
  }, [execute]);

  //set squares info to default after change mode or count
  useEffect(() => {
    initSquares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countOfSquares, mode]);

  return (
    <div className="App">
      <ModeContext.Provider value={mode}>
        {["idle", "pending"].includes(status) ? (
          <div className="title loading">Loading...</div>
        ) : "error" === status ? (
          <div className="title error">{error}</div>
        ) : (
          <>
            <header>
              <h1 className="title">Select count of squares</h1>
              <select
                onChange={(event) =>
                  handleChangeCountOfSquares(event.target.value)
                }
              >
                {value?.map((item) => (
                  <option key={item.field} value={item.field}>
                    {item.name}
                  </option>
                ))}
              </select>
              <h1 className="title">Select Mode:</h1>
              <select
                onChange={(event) => handleChangeMode(event.target.value)}
              >
                <option value="hover">onHover</option>
                <option value="click">onClick</option>
              </select>
            </header>
            <div className="container">
              <div className="block">
                <ListSquares
                  pickSquare={pickSquare}
                  unpickSquare={unpickSquare}
                  squares={squares}
                />
              </div>
              <div className="block">
                <div className="picked-squares">
                  <h1 className="title">Picked Squares</h1>
                  <ListPickedSquares squares={squares} />
                </div>
              </div>
            </div>
          </>
        )}
      </ModeContext.Provider>
    </div>
  );
}

export default App;
