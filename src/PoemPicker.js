import React from "react";
import { Link, withRouter } from "react-router-dom";

const PoemPicker = ({ titles, setTitleHandler, setPoemHandler }) => {
  const setDataHandler = (title) => {
    setTitleHandler(title);
    setPoemHandler();
  };

  return (
    <div>
      {titles.map((title) => (
        <div onClick={() => setDataHandler(title.title)}>
          <Link to="/poem">{title.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default withRouter(PoemPicker);
