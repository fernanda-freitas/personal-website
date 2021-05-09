import React, { useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouse-context";

const Cursor = () => {
    // 1.
  const { cursorType } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"cursor " + cursorType}
      ></div>
    </>
  );
};

export default Cursor;