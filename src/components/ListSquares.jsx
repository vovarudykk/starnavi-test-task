import React from "react";
import Square from "./Square";

// List of squares
const ListSquares = (props) => {
  return (
    <div
      className="squares"
      style={{
        gridTemplateColumns: `repeat(5, 5rem)`,
        gridTemplateRows: `repeat(${props.squares.length / 5}, 5rem)`,
      }}
    >
      {props.squares?.map((square) => (
        <Square
          key={square.id}
          square={square}
          pickSquare={props.pickSquare}
          unpickSquare={props.unpickSquare}
          squares={props.squares}
        />
      ))}
    </div>
  );
};

export default ListSquares;
