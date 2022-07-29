import React, { useContext } from "react";
import ModeContext from "../Store/ModeContext";

const Square = (props) => {
  const mode = useContext(ModeContext);

  const handleHover = (event, square) => {
    if (!props.square.isPicked) {
      let updatedSquare = square;
      updatedSquare.isPicked = true;
      updatedSquare.color = "blue";
      props.pickSquare(updatedSquare);
    } else {
      let updatedSquare = square;
      updatedSquare.isPicked = false;
      updatedSquare.color = "white";
      props.unpickSquare(updatedSquare);
    }
  };

  const handleClick = (event, square) => {
    if (!props.square.isPicked) {
      let updatedSquare = square;
      updatedSquare.isPicked = true;
      updatedSquare.color = "blue";
      props.pickSquare(updatedSquare);
    } else {
      let updatedSquare = square;
      updatedSquare.isPicked = false;
      updatedSquare.color = "white";
      props.unpickSquare(updatedSquare);
    }
  };

  return (
    <>
      {mode === "hover" ? (
        <div
          key={props.square.id}
          style={{
            backgroundColor: props.square.color,
            border: "1px solid black",
          }}
          onMouseOver={(event) => handleHover(event, props.square)}
          onMouseOut={(event) => handleHover(event, props.square)}
        ></div>
      ) : (
        <div
          key={props.square.id}
          style={{
            backgroundColor: props.square.color,
            border: "1px solid black",
          }}
          onClick={(event) => handleClick(event, props.square)}
        ></div>
      )}
    </>
  );
};

export default Square;
