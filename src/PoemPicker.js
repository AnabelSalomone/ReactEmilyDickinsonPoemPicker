import React from "react";
import { useHistory } from "react-router-dom";

const PoemPicker = ({ titles, setTitleHandler, setPoemHandler }) => {
  const history = useHistory();

  const setDataHandler = (title) => {
    setTitleHandler(title);
    setPoemHandler();
  };

  function handleClick() {
    history.push("/poem");
  }

  return (
    <div>
      {titles.map((title) => (
        <div onClick={() => setDataHandler(title.title)}>
          <p onClick={handleClick}>{title.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PoemPicker;
