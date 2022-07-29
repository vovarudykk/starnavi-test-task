import React, { useEffect } from "react";

const ListPickedSquares = (props) => {
  useEffect(() => {}, [props]);

  return (
    <>
      {props.squares?.map((square) =>
        square.isPicked ? (
          <div key={square.id} className="picked-square">
            {square.name}
          </div>
        ) : null
      )}
    </>
  );
};

export default ListPickedSquares;
